use lazy_static::lazy_static;
use regex::Regex;
use rocket::State;
use sqlx::{Pool, Sqlite};

use crate::database::DawnFile;

lazy_static! {
    static ref CRAWLER_REGEXES: Regex = Regex::new(
        r"((Googlebot\/)|(Googlebot-Mobile)|(Googlebot-Image)|(Googlebot-News)|(Googlebot-Video)|(AdsBot-Google([^-]|$))|(AdsBot-Google-Mobile)|(Feedfetcher-Google)|(Mediapartners-Google)|(Mediapartners \(Googlebot\))|(APIs-Google)|(Google-InspectionTool)|(Storebot-Google)|(GoogleOther)|(bingbot)|(Slurp)|([wW]get)|(LinkedInBot)|(Python-urllib)|(python-requests)|(aiohttp)|(httpx)|(libwww-perl)|(httpunit)|(Nutch)|(Go-http-client)|(phpcrawl)|(msnbot)|(jyxobot)|(FAST-WebCrawler)|(FAST Enterprise Crawler)|(BIGLOTRON)|(Teoma)|(convera)|(seekbot)|(Gigabot)|(Gigablast)|(exabot)|(ia_archiver)|(GingerCrawler)|(webmon )|(HTTrack)|(grub\.org)|(UsineNouvelleCrawler)|(antibot)|(netresearchserver)|(speedy)|(fluffy)|(findlink)|(msrbot)|(panscient)|(yacybot)|(AISearchBot)|(ips-agent)|(tagoobot)|(MJ12bot)|(woriobot)|(yanga)|(buzzbot)|(mlbot)|(yandex\.com\/bots)|(purebot)|(Linguee Bot)|(CyberPatrol)|(voilabot)|(Baiduspider)|(citeseerxbot)|(spbot)|(twengabot)|(postrank)|(Turnitin)|(scribdbot)|(page2rss)|(sitebot)|(linkdex)|(Adidxbot)|(ezooms)|(dotbot)|(Mail\.RU_Bot)|(discobot)|(heritrix)|(findthatfile)|(europarchive\.org)|(NerdByNature\.Bot)|((sistrix|SISTRIX) [cC]rawler)|(Ahrefs(Bot|SiteAudit))|(fuelbot)|(CrunchBot)|(IndeedBot)|(mappydata)|(woobot)|(ZoominfoBot)|(PrivacyAwareBot)|(Multiviewbot)|(SWIMGBot)|(Grobbot)|(eright)|(Apercite)|(semanticbot)|(Aboundex)|(domaincrawler)|(wbsearchbot)|(summify)|(CCBot)|(edisterbot)|(SeznamBot)|(ec2linkfinder)|(gslfbot)|(aiHitBot)|(intelium_bot)|(facebookexternalhit)|(Yeti)|(RetrevoPageAnalyzer)|(lb-spider)|(Sogou)|(lssbot)|(careerbot)|(wotbox)|(wocbot)|(ichiro)|(DuckDuckBot)|(lssrocketcrawler)|(drupact)|(webcompanycrawler)|(acoonbot)|(openindexspider)|(gnam gnam spider)|(web-archive-net\.com\.bot)|(backlinkcrawler)|(coccoc)|(integromedb)|(content crawler spider)|(toplistbot)|(it2media-domain-crawler)|(ip-web-crawler\.com)|(siteexplorer\.info)|(elisabot)|(proximic)|(changedetection)|(arabot)|(WeSEE:Search)|(niki-bot)|(CrystalSemanticsBot)|(rogerbot)|(360Spider)|(psbot)|(InterfaxScanBot)|(CC Metadata Scaper)|(g00g1e\.net)|(GrapeshotCrawler)|(urlappendbot)|(brainobot)|(fr-crawler)|(binlar)|(SimpleCrawler)|(Twitterbot)|(cXensebot)|(smtbot)|(bnf\.fr_bot)|(A6-Indexer)|(ADmantX)|(Facebot)|(OrangeBot\/)|(memorybot)|(AdvBot)|(MegaIndex)|(SemanticScholarBot)|(ltx71)|(nerdybot)|(xovibot)|(BUbiNG)|(Qwantify)|(archive\.org_bot)|(Applebot)|(TweetmemeBot)|(crawler4j)|(findxbot)|(S[eE][mM]rushBot)|(yoozBot)|(lipperhey)|(Y!J)|(Domain Re-Animator Bot)|(AddThis)|(Screaming Frog SEO Spider)|(MetaURI)|(Scrapy)|(Livelap[bB]ot)|(OpenHoseBot)|(CapsuleChecker)|(collection@infegy\.com)|(IstellaBot)|(DeuSu\/)|(betaBot)|(Cliqzbot\/)|(MojeekBot\/)|(netEstate NE Crawler)|(SafeSearch microdata crawler)|(Gluten Free Crawler\/)|(Sonic)|(Sysomos)|(Trove)|(deadlinkchecker)|(Slack-ImgProxy)|(Embedly)|(RankActiveLinkBot)|(iskanie)|(SafeDNSBot)|(SkypeUriPreview)|(Veoozbot)|(Slackbot)|(redditbot)|(datagnionbot)|(Google-Adwords-Instant)|(adbeat_bot)|(WhatsApp)|(contxbot)|(pinterest\.com\/bot)|(electricmonk)|(GarlikCrawler)|(BingPreview\/)|(vebidoobot)|(FemtosearchBot)|(Yahoo Link Preview)|(MetaJobBot)|(DomainStatsBot)|(mindUpBot)|(Daum\/)|(Jugendschutzprogramm-Crawler)|(Xenu Link Sleuth)|(Pcore-HTTP)|(moatbot)|(KosmioBot)|([pP]ingdom)|(AppInsights)|(PhantomJS)|(Gowikibot)|(PiplBot)|(Discordbot)|(TelegramBot)|(Jetslide)|(newsharecounts)|(James BOT)|(Bark[rR]owler)|(TinEye)|(SocialRankIOBot)|(trendictionbot)|(Ocarinabot)|(epicbot)|(Primalbot)|(DuckDuckGo-Favicons-Bot)|(GnowitNewsbot)|(Leikibot)|(LinkArchiver)|(YaK\/)|(PaperLiBot)|(Digg Deeper)|(dcrawl)|(Snacktory)|(AndersPinkBot)|(Fyrebot)|(EveryoneSocialBot)|(Mediatoolkitbot)|(Luminator-robots)|(ExtLinksBot)|(SurveyBot)|(NING\/)|(okhttp)|(Nuzzel)|(omgili)|(PocketParser)|(YisouSpider)|(um-LN)|(ToutiaoSpider)|(MuckRack)|(Jamie's Spider)|(AHC\/)|(NetcraftSurveyAgent)|(Laserlikebot)|(^Apache-HttpClient)|(AppEngine-Google)|(Jetty)|(Upflow)|(Thinklab)|(Traackr\.com)|(Twurly)|(Mastodon)|(http_get)|(DnyzBot)|(botify)|(007ac9 Crawler)|(BehloolBot)|(BrandVerity)|(check_http)|(BDCbot)|(ZumBot)|(EZID)|(ICC-Crawler)|(ArchiveBot)|(^LCC )|(filterdb\.iss\.net\/crawler)|(BLP_bbot)|(BomboraBot)|(Buck\/)|(Companybook-Crawler)|(Genieo)|(magpie-crawler)|(MeltwaterNews)|(Moreover)|(newspaper\/)|(ScoutJet)|((^| )sentry\/)|(StorygizeBot)|(UptimeRobot)|(OutclicksBot)|(seoscanners)|(Hatena)|(Google Web Preview)|(MauiBot)|(AlphaBot)|(SBL-BOT)|(IAS crawler)|(adscanner)|(Netvibes)|(acapbot)|(Baidu-YunGuanCe)|(bitlybot)|(blogmuraBot)|(Bot\.AraTurka\.com)|(bot-pge\.chlooe\.com)|(BoxcarBot)|(BTWebClient)|(ContextAd Bot)|(Digincore bot)|(Disqus)|(Feedly)|(Fetch\/)|(Fever)|(Flamingo_SearchEngine)|(FlipboardProxy)|(g2reader-bot)|(G2 Web Services)|(imrbot)|(K7MLWCBot)|(Kemvibot)|(Landau-Media-Spider)|(linkapediabot)|(vkShare)|(Siteimprove\.com)|(BLEXBot\/)|(DareBoost)|(ZuperlistBot\/)|(Miniflux\/)|(Feedspot)|(Diffbot\/)|(SEOkicks)|(tracemyfile)|(Nimbostratus-Bot)|(zgrab)|(PR-CY\.RU)|(AdsTxtCrawler)|(Datafeedwatch)|(Zabbix)|(TangibleeBot)|(google-xrawler)|(axios)|(Amazon CloudFront)|(Pulsepoint)|(CloudFlare-AlwaysOnline)|(Google-Structured-Data-Testing-Tool)|(WordupInfoSearch)|(WebDataStats)|(HttpUrlConnection)|(ZoomBot)|(VelenPublicWebCrawler)|(MoodleBot)|(jpg-newsbot)|(outbrain)|(W3C_Validator)|(Validator\.nu)|(W3C-checklink)|(W3C-mobileOK)|(W3C_I18n-Checker)|(FeedValidator)|(W3C_CSS_Validator)|(W3C_Unicorn)|(Google-PhysicalWeb)|(Blackboard)|(ICBot\/)|(BazQux)|(Twingly)|(Rivva)|(Experibot)|(awesomecrawler)|(Dataprovider\.com)|(GroupHigh\/)|(theoldreader\.com)|(AnyEvent)|(Uptimebot\.org)|(Nmap Scripting Engine)|(2ip\.ru)|(Clickagy)|(Caliperbot)|(MBCrawler)|(online-webceo-bot)|(B2B Bot)|(AddSearchBot)|(Google Favicon)|(HubSpot)|(Chrome-Lighthouse)|(HeadlessChrome)|(CheckMarkNetwork\/)|(www\.uptime\.com)|(Streamline3Bot\/)|(serpstatbot\/)|(MixnodeCache\/)|(^curl)|(SimpleScraper)|(RSSingBot)|(Jooblebot)|(fedoraplanet)|(Friendica)|(NextCloud)|(Tiny Tiny RSS)|(RegionStuttgartBot)|(Bytespider)|(Datanyze)|(Google-Site-Verification)|(TrendsmapResolver)|(tweetedtimes)|(NTENTbot)|(Gwene)|(SimplePie)|(SearchAtlas)|(Superfeedr)|(feedbot)|(UT-Dorkbot)|(Amazonbot)|(SerendeputyBot)|(Eyeotabot)|(officestorebot)|(Neticle Crawler)|(SurdotlyBot)|(LinkisBot)|(AwarioSmartBot)|(AwarioRssBot)|(RyteBot)|(FreeWebMonitoring SiteChecker)|(AspiegelBot)|(NAVER Blog Rssbot)|(zenback bot)|(SentiBot)|(Domains Project\/)|(Pandalytics)|(VKRobot)|(bidswitchbot)|(tigerbot)|(NIXStatsbot)|(Atom Feed Robot)|([Cc]urebot)|(PagePeeker\/)|(Vigil\/)|(rssbot\/)|(startmebot\/)|(JobboerseBot)|(seewithkids)|(NINJA bot)|(Cutbot)|(BublupBot)|(BrandONbot)|(RidderBot)|(Taboolabot)|(Dubbotbot)|(FindITAnswersbot)|(infoobot)|(Refindbot)|(BlogTraffic\/\d\.\d+ Feed-Fetcher)|(SeobilityBot)|(Cincraw)|(Dragonbot)|(VoluumDSP-content-bot)|(FreshRSS)|(BitBot)|(^PHP-Curl-Class)|(Google-Certificates-Bridge)|(centurybot)|(Viber)|(e\.ventures Investment Crawler)|(evc-batch)|(PetalBot)|(virustotal)|((^| )PTST\/)|(minicrawler)|(Cookiebot)|(trovitBot)|(seostar\.co)|(IonCrawl)|(Uptime-Kuma)|(Seekport)|(FreshpingBot)|(Feedbin)|(CriteoBot)|(Snap URL Preview Service)|(Better Uptime Bot)|(RuxitSynthetic)|(Google-Read-Aloud)|(Valve\/Steam)|(OdklBot\/)|(GPTBot)|(ChatGPT-User)|(OAI-SearchBot)|(YandexRenderResourcesBot\/)|(LightspeedSystemsCrawler)|(ev-crawler\/)|(BitSightBot\/)|(woorankreview\/)|(Google-Safety)|(AwarioBot)|(DataForSeoBot)|(Linespider)|(WellKnownBot)|(A Patent Crawler)|(StractBot)|(search\.marginalia\.nu)|(YouBot)|(Nicecrawler)|(Neevabot)|(BrightEdge Crawler)|(SiteCheckerBotCrawler)|(TombaPublicWebCrawler)|(CrawlyProjectCrawler)|(KomodiaBot)|(KStandBot)|(CISPA Webcrawler)|(MTRobot)|(hyscore\.io)|(AlexandriaOrgBot)|(2ip bot)|(Yellowbrandprotectionbot)|(SEOlizer)|(vuhuvBot)|(INETDEX-BOT)|(Synapse)|(t3versionsBot)|(deepnoc)|(Cocolyzebot)|(hypestat)|(ReverseEngineeringBot)|(sempi\.tech)|(Iframely)|(MetaInspector)|(node-fetch)|(lkxscan)|(python-opengraph)|(OpenGraphCheck)|(developers\.google\.com\/\+\/web\/snippet)|(SenutoBot)|(MaCoCu)|(NewsBlur)|(inoreader)|(NetSystemsResearch)|(PageThing)|(WordPress\/)|(PhxBot)|(ImagesiftBot)|(Expanse)|(InternetMeasurement)|(^BW\/)|(GeedoBot)|(Audisto Crawler)|(PerplexityBot\/)|([cC]laude[bB]ot)|(Monsidobot)|(GroupMeBot)|(Vercelbot)|(vercel-screenshot)|(facebookcatalog\/)|(meta-externalagent\/)|(meta-externalfetcher\/))"
    ).unwrap();

    static ref META_DATA_ROUTES: Vec<(Regex, Metadata<'static>)> = vec![
      (Regex::new("^(hypno/files/?)").unwrap(), Metadata { title: "Trance By Dawn Files", description: "Get in trance with my hypnosis files "}),
      (Regex::new("^(trancer/?)").unwrap(), Metadata { title: "Trancer - Hypnosis Discord Bot", description: "Trancer is a feature-rich hypnosis-orientated Discord bot. This page contains statistics for our server, Trancy Twilight."}),
      (Regex::new("^(hypno/visuals/?)").unwrap(), Metadata { title: "Hypnosis Visuals", description: "Get mesmerised by a variety of pretty and customisable visuals" })
    ];
}

pub struct Metadata<'a> {
    pub title: &'a str,
    pub description: &'a str,
}

impl<'a> Metadata<'a> {
    pub fn produce_html(&self) -> String {
        format!(
            r#"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="{}" />
<meta property="og:description" content="{}" />
<meta name="theme-color" content="\#7647ad" />
<title>{}</title>
</head>
<body>

</body>
</html>
  "#,
            self.title, self.description, self.title
        )
    }
}

pub async fn check_crawler(ua: String, path: String, db: &State<Pool<Sqlite>>) -> Option<String> {
    if !CRAWLER_REGEXES.is_match(&ua) {
        return None;
    }

    // Check file meta data
    if let Some(captures) = Regex::new("hypno/files/([0-9]+)").unwrap().captures(&path) {
        let id = match captures.get(1).unwrap().as_str().parse::<u16>() {
            Err(_) => return None,
            Ok(ok) => ok,
        };

        let file = match sqlx::query_as::<_, DawnFile>("SELECT * FROM files WHERE id = ?1;")
            .bind(id)
            .fetch_one(db.inner())
            .await
        {
            Err(_) => return None,
            Ok(ok) => ok,
        };

        return Some(
            Metadata {
                title: &format!("{} - {} - Trance By Dawn", file.id, file.title),
                description: &file.description,
            }
            .produce_html(),
        );
    }

    // Check static meta data
    for route in META_DATA_ROUTES.iter() {
        if route.0.is_match(&path) {
            return Some(route.1.produce_html());
        }
    }

    None
}
