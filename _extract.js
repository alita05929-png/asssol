const fs = require("fs");
const s = fs.readFileSync("E:/pack/solana/2/assets/index--9_aod6e.js", "utf8");
const re = /"((?:\\.|[^"\\]){8,240})"/g;
let m;
const out = [];
while ((m = re.exec(s))) {
  const t = m[1].replace(/\\n/g, " ").replace(/\\"/g, '"');
  if (/[A-Za-z]{4}/.test(t)) out.push(t);
}
const interesting = out.filter((t) =>
  /swap|robin|solana|uniswap|penguin|girl|chain|meme|crypto|contract|whitepaper|pool|launched|ticker|\$/i.test(t)
);
fs.writeFileSync("E:/pack/solana/2/_strings.txt", interesting.join("\n---\n"));
console.log("count", interesting.length);
