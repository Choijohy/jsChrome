const Quotes =[
    {quote:"길을 걷다가 돌을 보면 약자는 그것을 걸림돌이라고 하고 강자는 그것을 디딤돌이라고 한다.",
    author:"토마스 칼라일"},
    {quote:"의사보다 구글 검색엔진에 더 믿음이 간다면 의사를 바꿀 때가 되었는지도 모른다",
    author:"Jadelr Cordova"},
    {quote:"미래의 가장 좋은 점은 한 번에 하루씩 온다는 것이다.",
    author:"Abraham Lincoln"},
    {quote:"웃음은 강장제이고, 안정제이며, 진통제이다.",
    author:"Charlie Chaplin"},
    {quote:"사랑은 아름다운 여자를 만나서부터 그녀가 꼴뚜기처럼 생겼음을 발견하기까지의 즐거운 시간이다.",
    author:"John Barrymore"},
    {quote:"1년에 20파운드를 벌어 19파운드 6펜스를 쓴 사람에게 남는건 행복이다. 똑같이 1년에 20파운드를 벌었지만 20파운드 6펜스를 쓴 사람에게 남는건 고통이다.",
    author:"Charles Dickens"},
    {quote:"(기억이란) 인간의 진정한 재산이다. 기억 속에서 인간은 가장 부유하면서 또 가장 빈곤하다.",
    author:"Alexander Smith"},
    {quote:"군중은 지도자에게 새로운 힘을 준다.",
    author:"Evenius"},
    {quote:"죽음과 동시에 잊혀지고 싶지 않다면 읽을 가치가 있는 글을 쓰라. 또는 글로 쓸 가치가 있는 일을 하라.",
    author:"Benjamin Franklin"},
    {quote:"첫째로, 절대 두려워하지 말라. 당신이 후퇴하도록 밀어부치는 적도 바로 그 순간 당신을 두려워하고 있다.",
    author:"Andre Maurois"}
]

const QuoteSentence = document.querySelector("#quotesSentence span:first-child");
const author = document.querySelector("#quotesSentence span:last-child");

QuoteSentence.innerText = Quotes[Math.floor(Math.random()*Quotes.length)].quote;
author.innerText = Quotes[Math.floor(Math.random()*Quotes.length)].author;