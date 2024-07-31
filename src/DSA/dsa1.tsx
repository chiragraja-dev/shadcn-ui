//1.Count number of even and odd elements in an array
//2.AVG of the array
import React, { useEffect } from 'react'

const Dsa1 = () => {
    const arr = [1, 2, 3, 5, 4, 6]
    const arr2 = [8, 7, 2, 5, 3, 1]
    const arr3 = [3, 4, - 7, 3, 1, 3, 1, -4, -2, -2]
    // const arr2: number[] = [];
    // const arr3: number[] = [];
    // function CountEvenOdd() {
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i] % 2 == 0) {
    //             arr2.push(arr[i])
    //         } else {
    //             arr3.push(arr[i])
    //         }
    //     }
    // }

    // function AvrageOfArray() {
    //     let avg = 0;
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i + 1]) {
    //             avg = arr[i] + arr[i + 1]
    //         }
    //     }
    //     return avg
    // }

    // function DivisibleBysix(n: number) {
    //     if (n % 6 == 0) {
    //         console.log("Yes, Number is divisible")
    //     }
    //     else {
    //         console.log("No, Number is not divisible")

    //     }
    // }

    // function calculateSumPair() {
    //     const t = 10;
    //     for (var i = 0; i < arr2.length; i++) {
    //         for (var j = i; j < arr2.length; j++) {
    //             const data = arr2[i] + arr2[j]
    //             if (data === t) {
    //                 console.log(arr2[i], ", ", arr2[j])
    //             }
    //         }
    //     }
    // }




    useEffect(() => {
        // calculateSumPair()
        // DivisibleBysix(1212)
        // console.log(AvrageOfArray())
        // CountEvenOdd()


    }, [])


    return (
        <div>Dsa1</div>
    )
}

export default Dsa1