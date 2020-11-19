function domainName(url) {
    // return url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].match(/.*(?=\.)/g)[0];
    // return url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img);
    // return url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/, "").split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));