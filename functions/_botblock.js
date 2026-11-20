// 수집/스크래퍼 차단 가드.
// 검색엔진(Google/네이버/Bing 등)과 링크 미리보기 봇은 통과시킨다.
// 어떤 이유로든 판별에 실패하면 페이지를 정상적으로 내보낸다(fail open).

const ALLOW = /(googlebot|google-inspectiontool|googleother|adsbot-google|mediapartners-google|feedfetcher-google|bingbot|bingpreview|msnbot|duckduckbot|applebot|yeti|naver|daum|baiduspider|yandexbot|sogou|exabot|ia_archiver|twitterbot|facebookexternalhit|discordbot|slackbot|telegrambot|kakaotalk|linkedinbot|pinterestbot|redditbot|embedly|iframely|vkshare|w3c_validator|pingdom|lighthouse|pagespeed)/i;

const BLOCK = /(gptbot|oai-searchbot|chatgpt-user|openai|claudebot|claude-searchbot|claude-user|claude-web|anthropic|cohere-ai|perplexitybot|perplexity-user|youbot|google-extended|ccbot|bytespider|meta-externalagent|facebookbot|amazonbot|diffbot|omgili|imagesiftbot|dataforseo|ahrefsbot|semrushbot|mj12bot|dotbot|blexbot|petalbot|screaming ?frog|serpstatbot|siteauditbot|zoominfobot|magpie|cognitiveseo|scrapy|python-requests|python-urllib|aiohttp|httpx|node-fetch|axios\/|go-http-client|java\/|okhttp|libwww-perl|wget|curl\/|httpie|postmanruntime|headlesschrome|phantomjs|selenium|puppeteer|playwright|electron\/|guzzlehttp|mechanize|nutch|heritrix|zgrab|masscan|nmap|sqlmap|nikto|nuclei|shodan|censys)/i;

export function guard(context) {
  try {
    const ua = context.request.headers.get('user-agent') || '';
    if (ua && !ALLOW.test(ua) && BLOCK.test(ua)) {
      return new Response('Forbidden', {
        status: 403,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'no-store',
          'x-robots-tag': 'noindex, nofollow',
        },
      });
    }
  } catch (e) {
    // 판별 실패 시 그대로 통과
  }
  return context.next();
}
