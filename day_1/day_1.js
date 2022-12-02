import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"

let input = await Deno.readTextFile('./day_1.txt')
input = input.split(/^\n/mg).map(i => {
    return i.split(/\n/)
})
.map((i) => {
    return i.reduce((acc, cur) => {
        return acc + (parseInt(cur) || 0)
    }, 0)
})
input = SortService.sort(input, Direction.DESCENDING).slice(0,3).reduce((acc, cur) => {
    return acc+cur
},0)

console.log(input)
