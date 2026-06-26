import { readFileSync } from 'fs'
const c = readFileSync('out/index.html', 'utf8')
const m = c.match(/src="[^"]*(banner|logo|historia|tradicion)[^"]*"/g) || []
console.log(m.join('\n') || 'NO MATCHES')
