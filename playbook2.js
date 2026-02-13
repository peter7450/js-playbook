/* Given an array, keep removing the last item 
until the array has only 2 items left.
Return the final array. */

function removed(plates){
    while(plates.length > 2){
        plates.pop()
    }
    return plates;
}
console.log(removed(["p1", "p2", "p3", "p4", "p5"]));


