// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "For most up-to-date list of my publications, please visit my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/CV__September_2025_.pdf";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-starting-a-phd-at-the-surrey-institute-for-people-centred-artificial-intelligence",
          title: 'I am starting a PhD at the Surrey Institute for People-Centred Artificial Intelligence!...',
          description: "",
          section: "News",},{id: "news-i-have-published-my-first-first-author-peer-reviewed-journal-article-on-journalism-practice-on-the-characteristics-of-the-global-data-journalism-workforce",
          title: 'I have published my first first-author peer-reviewed journal article on Journalism Practice, on...',
          description: "",
          section: "News",},{id: "news-for-the-second-year-in-a-row-my-research-on-the-characteristics-of-the-data-journalism-industry-is-going-to-be-discussed-at-the-international-journalism-festival-in-perugia-in-april",
          title: 'For the second year in a row, my research on the characteristics of...',
          description: "",
          section: "News",},{id: "news-i-have-been-hired-as-research-assistant-at-the-university-of-canterbury-uk-to-work-on-a-project-under-the-lead-of-prof-agnes-gulyas-on-local-media-articles-geolocations-with-completion-in-june",
          title: 'I have been hired as Research Assistant at the University of Canterbury (UK)...',
          description: "",
          section: "News",},{id: "news-i-have-presented-a-talk-at-the-computation-journalism-conference-at-eth-zurich-presenting-the-findings-from-my-journalism-practice-article-on-data-journalism-global-practices-adding-year-to-year-comparisons-with-the-latest-survey-edition-which-i-lead-for-the-european-journalism-centre",
          title: 'I have presented a talk at the Computation + Journalism Conference at ETH...',
          description: "",
          section: "News",},{id: "news-i-have-been-hired-as-teaching-assistant-for-the-topics-in-people-centred-ai-module-running-at-the-university-of-surrey-in-the-fall-of-2023-targeted-at-the-msc-in-artifical-intelligence-students",
          title: 'I have been hired as Teaching Assistant for the Topics in People-Centred AI...',
          description: "",
          section: "News",},{id: "news-i-have-published-my-first-phd-linked-journal-article-in-the-peer-reviewed-journal-mdpi-s-journalism-and-media-on-the-limitations-and-effects-on-findings-of-various-commonly-used-local-media-databases-in-the-uk",
          title: 'I have published my first PhD linked journal article in the peer-reviewed journal...',
          description: "",
          section: "News",},{id: "news-i-am-for-the-third-year-now-running-the-state-of-data-journalism-survey-for-the-european-journalism-centre",
          title: 'I am, for the third year now, running the State of Data Journalism...',
          description: "",
          section: "News",},{id: "news-i-have-been-hired-by-the-uk-charity-the-public-interest-news-foundation-as-a-data-architect-for-their-local-media-database",
          title: 'I have been hired by the UK charity the Public Interest News Foundation...',
          description: "",
          section: "News",},{id: "news-i-first-authored-an-industry-report-on-the-state-of-local-news-in-the-uk-on-behalf-of-the-public-interest-news-foundation-featuring-interactive-maps-on-news-deserts-and-plenty-of-statistics-on-media-ownership",
          title: 'I first-authored an industry report on the state of local news in the...',
          description: "",
          section: "News",},{id: "news-i-have-been-hired-by-professor-agnes-gulyas-at-the-school-of-creative-arts-and-industries-in-the-university-of-canterbury-to-write-an-industry-report-of-the-state-of-local-media-research",
          title: 'I have been hired by Professor Agnes Gulyas at the School of Creative...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-my-doctoral-research-at-the-local-journalism-researchers-workshop-at-unc-chapel-hill-north-carolina",
          title: 'I am presenting my doctoral research at the Local Journalism Researchers Workshop at...',
          description: "",
          section: "News",},{id: "news-the-database-i-created-for-the-public-interest-news-foundation-has-enabled-the-media-ownership-2025-local-news-chapter-by-media-reform-coalition-shedding-light-on-media-ownership-consolidation-in-the-uk",
          title: 'The database I created for the Public Interest News Foundation has enabled the...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-a-dataset-paper-at-the-international-aaai-conference-on-web-and-social-media-icwsm-in-copenhagen",
          title: 'I am presenting a dataset paper at the International AAAI Conference on Web...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-a-paper-on-work-carried-out-for-the-public-interest-news-foundation-financed-by-the-department-for-culture-media-and-sport-on-how-to-automate-the-tracking-of-existing-local-media-outlets-in-the-uk-at-dh-conf-in-lisbon-portugal",
          title: 'I am presenting a paper on work carried out for the Public Interest...',
          description: "",
          section: "News",},{id: "news-journal-article-acceptance-towards-efficient-and-accessible-geoparsing-of-uk-local-media-introduces-new-ai-methods-for-extracting-geographical-data-from-local-news-featured-in-computational-humanities-research",
          title: 'Journal article acceptance: “Towards Efficient and Accessible Geoparsing of UK Local Media” introduces...',
          description: "",
          section: "News",},{id: "news-research-report-out-challenges-and-opportunities-for-uk-local-media-insights-from-academic-research-written-with-prof-agnes-gulyas-at-canterbury-christ-church-university-provides-recommendations-to-local-media-stakeholders-based-on-findings-from-academic-literature",
          title: 'Research Report out: Challenges and opportunities for UK local media: Insights from academic...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-attend-the-data-methods-initiative-s-first-in-person-workshop-which-will-take-place-jönköping-international-business-school-on-november-27th-and-28th",
          title: 'I have been invited to attend the Data Methods Initiative’s first in-person workshop,...',
          description: "",
          section: "News",},{id: "news-conference-paper-acceptance-mapping-news-geography-a-computational-framework-for-classifying-local-media-through-geographic-coverage-patterns-generates-a-data-driven-typology-of-subnational-news-outlets-in-the-uk-using-the-spatial-properties-of-their-coverage-i-am-presenting-this-work-on-december-12th-at-the-computational-humanities-research-conference-luxembourg",
          title: 'Conference paper acceptance: “Mapping News Geography: A Computational Framework for Classifying Local Media...',
          description: "",
          section: "News",},{id: "news-the-uk-local-news-report-2025-i-have-researched-and-produced-for-the-public-interest-news-foundation-pinf-is-now-out-this-is-the-second-such-report-i-produce-for-pinf-and-it-provides-a-current-snapshot-of-the-uk-local-news-ecosystem-including-news-deserts-and-statistical-analysis-of-sociodemographic-correlates-of-local-news-provision",
          title: 'The ‘UK Local News Report 2025’ I have researched and produced for the...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/did:plc:3ppe3xqyrv65ueocqd3e6y3b", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%69%6D%6F%6E%61%62%69%73%69%61%6E%69%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/simonabisiani", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/simona-bisiani-847763b7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Wr8m1T4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
