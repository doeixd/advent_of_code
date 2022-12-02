
let opponent_code = {
    'A': 'Rock',
    'B': 'Paper',
    'C': 'Scissors'
}

let self_code = {
    'X': 'Rock',
    'Y': 'Paper',
    'Z': 'Scissors'
}

let outcome_code = {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win'
}

let game_rules = {
    'Rock': {
        win: 'Paper',
        lose: 'Scissors',
        draw: 'Rock',
        'Scissors':'win',
        'Paper': 'lose',
        'Rock':'draw',
        score: 1
    },
    'Paper': {
        win: 'Scissors',
        lose: 'Rock',
        draw: 'Paper',
        'Scissors':'lose',
        'Paper': 'draw',
        'Rock':'win',
        score: 2
    },
    'Scissors': {
        win: 'Rock',
        lose: 'Paper',
        draw: 'Scissors',
        'Scissors':'draw',
        'Paper': 'win',
        'Rock':'lose',
        score: 3
    },
}

let result_points = {
    lose: 0,
    draw: 3,
    win:  6
} 

let test = await Deno.readTextFile('./day_2.test')
test = test.split('\n')
let input = await Deno.readTextFile('./day_2.txt')
input = input.split('\n')

let part1 = input.reduce((acc, cur) => {
    let [them, us] = cur.split(' ')
    them = opponent_code[them]
    us = self_code[us]

    let move_score = game_rules[us].score
    let result =  game_rules[us][them] 
    let result_score = result_points[result]
    // console.log({acc, cur, them, us, result_score, move_score, result, final: acc+result_score+move_score}) 
    return acc+result_score+move_score
},0)

let part2 = input.reduce((acc, cur) => {
    let [them, desired_outcome] = cur.split(' ')
    them = opponent_code[them]
    desired_outcome = outcome_code[desired_outcome]
    let us = game_rules[them][desired_outcome]
        
    let move_score = game_rules[us].score
    let result_score = result_points[desired_outcome]
   
    // console.log({cur, them, desired_outcome, us, move_score, result_score, final: acc+move_score+result_score})
   return acc+move_score+result_score 
},0)


console.log(part1)
console.log(part2)