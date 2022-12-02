// use std::env;
use std::fs;

fn main () {
    let input: Vec<usize> = include_str!("./day_1.txt")
        .split("\n\n")
        .map(|a| 
            a.lines()
                .map(|b| b.parse::<usize>().unwrap())
                .sum()
        )
        .collect();
    
    let max = input.iter().max().unwrap();
    
    println!("{:?}", max);
}
