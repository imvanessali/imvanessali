-- UpDownCard × Supabase 同步 —— 一次性建表脚本
-- 在你的 Supabase 项目 SQL Editor 里整段执行即可。
--
-- 设计：一张通用 KV 表 udc_store，键与浏览器 localStorage 完全一致
-- （udc.decks.v1 / udc.progress.v1.<deckId> / udc.fields.v1.<deckId>）。
-- 前端用 anon key + RLS 直连，无需额外后端；每行只能被属主读写。

create table if not exists public.udc_store (
  user_id    uuid        not null references auth.users (id) on delete cascade,
  key        text        not null,
  value      jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

comment on table public.udc_store is 'UpDownCard per-user cloud sync store (mirrors the app''s localStorage keys)';

alter table public.udc_store enable row level security;

-- 属主才能读
create policy "udc_store_select_own"
  on public.udc_store for select
  using (auth.uid() = user_id);

-- 属主才能写（插入/更新/删除）
create policy "udc_store_insert_own"
  on public.udc_store for insert
  with check (auth.uid() = user_id);

create policy "udc_store_update_own"
  on public.udc_store for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "udc_store_delete_own"
  on public.udc_store for delete
  using (auth.uid() = user_id);

-- 提醒：在 Supabase 控制台 Authentication → URL Configuration 里
-- 把 Site URL / Redirect URLs 加上你的站点地址（如 https://imvanessa.li/updowncard/），
-- 否则魔法链接邮件里的回调会被拒绝。
