import rat from "../images/rat.jpg";
import ox from "../images/ox.png";
import tiger from "../images/tiger.jpeg";
import rabbit from "../images/rabbit.jpg";
import dragon from "../images/dragon.jpeg";
import snake from "../images/snake.jpg";
import horse from "../images/horse.jpg";
import goat from "../images/goat.jpeg";
import monkey from "../images/monkey.jpg";
import rooster from "../images/rooster.jpeg";
import dog from "../images/dog.jpeg";
import pig from "../images/pig.png";

import Card from "./Card";
import { useEffect, useState } from "react";

const DEFAULT_ORDER = [
    { order: 1, zodiac_name: "rat", image_src: {rat} },
    { order: 2, zodiac_name: "ox", image_src: {ox} },
    { order: 3, zodiac_name: "tiger", image_src: {tiger} },
    { order: 4, zodiac_name: "rabbit", image_src: {rabbit} },
    { order: 5, zodiac_name: "dragon", image_src: {dragon} },
    { order: 6, zodiac_name: "snake", image_src: {snake} },
    { order: 7, zodiac_name: "horse", image_src: {horse} },
    { order: 8, zodiac_name: "goat", image_src: {goat} },
    { order: 9, zodiac_name: "monkey", image_src: {monkey} },
    { order: 10, zodiac_name: "rooster", image_src: {rooster} },
    { order: 11, zodiac_name: "dog", image_src: {dog} },
    { order: 12, zodiac_name: "pig", image_src: {pig} },
  ];

//shuffle returns a new array without changing the original array
const shuffle = (array) => {
    let new_array = [];

    for(let i=0; i<array.length; i++)
    {
        new_array.push(array[i]);
    }

    let currentIndex = new_array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [new_array[currentIndex], new_array[randomIndex]] = [
        new_array[randomIndex], new_array[currentIndex]];
    }

    return new_array;
}

const initial_display = 
    DEFAULT_ORDER.map((item)=>{
    return <Card image={item} key={item.order} ></Card>
    });


const CardZone = (props)=>{

    const [temp_array, setTemp_array] = useState(initial_display);
    const [new_array, setNew_array] = useState(undefined);
    
    useEffect(

        ()=>{

            const all_cards = document.querySelectorAll(".zodiac-card");

            const handleClick = (event)=>{
                if(Number(event.currentTarget.id) - 1 == props.current_score)
                {
                    props.setCurrentScore(Number(event.currentTarget.id));
                    setNew_array ( shuffle(initial_display));
                } else {
                    props.setCurrentScore(0);
                    setNew_array(initial_display);
                    alert("New Game!");
                }
                
            }
            all_cards.forEach(
                (item)=>{
                    item.
                    addEventListener("click", handleClick);
                }
            )

            return ()=> {all_cards.forEach(
                (item)=>{
                    item.
                    removeEventListener("click", handleClick);
                }
            )}
        },[temp_array]
    )

    // if temp_array and new_array are deep equal 
    if(JSON.stringify(temp_array) !== JSON.stringify(new_array) && new_array!=undefined)
        setTemp_array(new_array);

    return (
      <div className="card-zone">{temp_array}</div>
    )
}

export default CardZone;
  