(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={zh:{metaTitle:`Folderis.app - 文件任务工作台`,metaDescription:`Folderis.app 把一句话描述的文件任务变成完成的结果，支持图片、PDF、表格、音频和视频。`,navTasks:`技能手册`,navAuthor:`关于作者`,authorName:`@郦橙锦妖Vanessa`,authorLink:`找我 <a href="https://imvanessa.li" target="_blank" rel="noopener">https://imvanessa.li</a>`,kicker:`内置 60+ 办公技能`,heroTitle:`选中文件<br>告诉 <span class="brand-word">Folderis</span><br>你想做什么`,intro:`压缩图片、拆分 PDF、修改 Excel、处理音视频……<br>零碎小活儿都交给 Folderis`,download:`下载`,downloadAria:`下载 Folderis`,versionLabel:`当前版本`,closeAria:`关闭下载选项`,modalKicker:`下载 Folderis`,modalTitle:`选择你的系统版本`,appleChip:`Apple 芯片`,appleNote:`适用于 Apple Silicon Mac`,intelChip:`Intel 芯片`,intelNote:`适用于 Intel 芯片 Mac`,windowsChip:`Windows`,windowsNote:`适用于 Windows 10/11 x64`,unavailable:`暂不可用`,bubblesAria:`Folderis 能完成的任务示例`,langToggle:`EN`,langToggleAria:`Switch to English`,tasks:[`这些 PNG 无损压缩一下`,`将这些 PDF 的每一页拆成单独文件`,`提取出视频的音轨`,`理解 Excel 第一列，拆成姓名、手机号、地址三列`,`把这两段音频接在一起`,`把这几个 PDF 合并成一个`,`对比这两个文件之间的差异`,`把所有发票的金额和日期整理成一个 Excel`,`用这些素材做一个 HTML 格式的演示文稿`,`这批录音都剪掉前 5 秒`,`这段会议录音转成文字纪要`,`做一个汇率兑换的网页`,`这几张图竖向拼成一张长图`]},en:{metaTitle:`Folderis.app - File Task Workspace`,metaDescription:`Folderis.app turns plain-language file tasks into finished outputs for images, PDFs, spreadsheets, audio, and video.`,navTasks:`Skills Handbook`,navAuthor:`About`,authorName:`@郦橙锦妖Vanessa`,authorLink:`Find me at <a href="https://imvanessa.li" target="_blank" rel="noopener">https://imvanessa.li</a>`,kicker:`60+ built-in office skills`,heroTitle:`Pick your files<br>tell <span class="brand-word">Folderis</span><br>what you want`,intro:`Compress images, split PDFs, edit spreadsheets, process audio and video, hand every little file chore to Folderis`,download:`Download`,downloadAria:`Download Folderis`,versionLabel:`Current version`,closeAria:`Close download options`,modalKicker:`Download Folderis`,modalTitle:`Choose your platform`,appleChip:`Apple Silicon`,appleNote:`For Apple Silicon Macs`,intelChip:`Intel`,intelNote:`For Intel Macs`,windowsChip:`Windows`,windowsNote:`For Windows 10/11 x64`,unavailable:`Not yet available`,bubblesAria:`Examples of tasks Folderis can complete`,langToggle:`中文`,langToggleAria:`切换到中文`,tasks:[`Losslessly compress these PNGs`,`Split each page of these PDFs into separate files`,`Extract the audio track from this video`,`Split this Excel column into name, phone, address`,`Join these two audio clips together`,`Merge these PDFs into one`,`Compare the differences between these two files`,`Collect every invoice's amount and date into one Excel`,`Turn these assets into an HTML slide deck`,`Trim the first 5 seconds off all these recordings`,`Transcribe this meeting recording into minutes`,`Build a currency-converter web page`,`Stitch these images vertically into one long image`]}},t=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702"/></svg>`,n=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801"/></svg>`,r=`folderis-lang`,i=`https://folderis-announce.folderis.workers.dev/announce.json`,a=`https://github.com/imvanessali/folderis-releases/releases/latest/download/Folderis-AppleSilicon.dmg`,o=`https://github.com/imvanessali/folderis-releases/releases/latest/download/Folderis-Intel.dmg`,s=`https://github.com/imvanessali/folderis-releases/releases/latest/download/Folderis-Setup.exe`,c=``;async function l(){try{c=(await(await fetch(i,{cache:`no-store`})).json())?.mac?.version?.trim()||``}catch{c=``}u()}function u(){let t=p.querySelector(`.download-version`);t&&(t.textContent=c?`${e[f].versionLabel} ${c}`:``)}function d(){let e=localStorage.getItem(r);return e===`zh`||e===`en`?e:(navigator.language||``).toLowerCase().startsWith(`zh`)?`zh`:`en`}var f=d(),p=document.querySelector(`#app`);window.addEventListener(`pointermove`,e=>{let t=e.clientX/window.innerWidth-.5,n=e.clientY/window.innerHeight-.5;document.documentElement.style.setProperty(`--pointer-x`,t.toFixed(3)),document.documentElement.style.setProperty(`--pointer-y`,n.toFixed(3))}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&m(!1)}),document.addEventListener(`click`,e=>{let t=document.querySelector(`.author-menu`);t&&!t.contains(e.target)&&t.classList.remove(`is-open`)});function m(e){let t=p.querySelector(`.download-modal`),n=p.querySelector(`.download-toggle`);!t||!n||(t.classList.toggle(`is-open`,e),t.setAttribute(`aria-hidden`,e?`false`:`true`),n.setAttribute(`aria-expanded`,String(e)))}function h(){let i=e[f];document.documentElement.lang=f===`zh`?`zh-CN`:`en`,document.title=i.metaTitle;let c=document.querySelector(`meta[name="description"]`);c&&c.setAttribute(`content`,i.metaDescription),p.innerHTML=`
  <div class="photo-bg" aria-hidden="true"></div>
  <div class="shade" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>

  <header class="topbar">
    <a class="brand" href="#" aria-label="Folderis.app home">
      <span>Folderis.app</span>
    </a>
    <div class="nav-side">
      <nav class="nav" aria-label="Primary navigation">
        <a href="/folderisapp/skills.html">${i.navTasks}</a>
        <div class="author-menu">
          <button class="nav-link author-trigger" type="button" aria-describedby="author-tooltip">${i.navAuthor}</button>
          <div class="author-tooltip" id="author-tooltip" role="tooltip">
            <strong>${i.authorName}</strong>
            <span>${i.authorLink}</span>
          </div>
        </div>
      </nav>
      <button class="lang-toggle" type="button" aria-label="${i.langToggleAria}">${i.langToggle}</button>
    </div>
  </header>

  <main class="hero" id="tasks">
    <section class="hero-copy" aria-label="Folderis task launcher">
      <p class="kicker">${i.kicker}</p>
      <h1>${i.heroTitle}</h1>
      <p class="intro">${i.intro}</p>
      <section class="download-panel" aria-label="${i.downloadAria}">
        <button class="download-toggle" type="button" aria-haspopup="dialog" aria-expanded="false">
          <span>${i.download}</span>
          <span class="download-arrow" aria-hidden="true">↗</span>
        </button>
        <p class="download-version" aria-live="polite"></p>
      </section>
    </section>

    <section class="bubble-stack" style="--bubble-duration: ${i.tasks.length*2}s" aria-label="${i.bubblesAria}">
      ${i.tasks.map((e,t)=>`
            <article class="task-bubble" style="--i: ${t}; --shift: ${t%2==0?-1:1}">
              <span>${e}</span>
            </article>
          `).join(``)}
    </section>
  </main>

  <section class="download-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="download-title">
    <button class="download-backdrop" type="button" aria-label="${i.closeAria}"></button>
    <article class="download-card">
      <button class="download-close" type="button" aria-label="${i.closeAria}">×</button>
      <p>${i.modalKicker}</p>
      <h2 id="download-title">${i.modalTitle}</h2>
      <div class="download-actions" id="download-options">
        <a class="download-button" href="${a}" aria-label="Download Folderis for Mac Apple silicon">
          <span class="platform-icon" aria-hidden="true">${t}</span>
          <strong>${i.appleChip}</strong>
          <span class="download-note">${i.appleNote}</span>
          <span class="download-action">${i.download}</span>
        </a>
        <a class="download-button" href="${o}" aria-label="Download Folderis for Mac Intel">
          <span class="platform-icon" aria-hidden="true">${t}</span>
          <strong>${i.intelChip}</strong>
          <span class="download-note">${i.intelNote}</span>
          <span class="download-action">${i.download}</span>
        </a>
        <a class="download-button" href="${s}" aria-label="Download Folderis for Windows">
          <span class="platform-icon" aria-hidden="true">${n}</span>
          <strong>${i.windowsChip}</strong>
          <span class="download-note">${i.windowsNote}</span>
          <span class="download-action">${i.download}</span>
        </a>
      </div>
    </article>
  </section>
`,p.querySelector(`.download-toggle`).addEventListener(`click`,()=>m(!0)),p.querySelectorAll(`.download-backdrop, .download-close`).forEach(e=>{e.addEventListener(`click`,()=>m(!1))});let l=p.querySelector(`.author-menu`);p.querySelector(`.author-trigger`).addEventListener(`click`,()=>{l.classList.toggle(`is-open`)}),p.querySelector(`.lang-toggle`).addEventListener(`click`,()=>{f=f===`zh`?`en`:`zh`,localStorage.setItem(r,f),h()}),u()}h(),l();