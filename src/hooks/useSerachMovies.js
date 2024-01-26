import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";

const useSerachMovies = (query) => {
    
    try {
useEffect(() => {
    serachMovies();
},[query])
    async function  serachMovies(){
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query='+query+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const data = res.json();
        console.log(data);
       }
} catch (error) {
    
}
   
   return 
}

export default useSerachMovies

// {
//     "page": 1,
//     "results": [
//       {
//         "adult": false,
//         "backdrop_path": "/92PG1J4gvxjTRLXTqDzPqjpe6fp.jpg",
//         "genre_ids": [
//           14,
//           28,
//           80
//         ],
//         "id": 268,
//         "original_language": "en",
//         "original_title": "Batman",
//         "overview": "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
//         "popularity": 39.775,
//         "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
//         "release_date": "1989-06-21",
//         "title": "Batman",
//         "video": false,
//         "vote_average": 7.224,
//         "vote_count": 7325
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/bxxupqG6TBLKC60M6L8iOvbQEr6.jpg",
//         "genre_ids": [
//           28,
//           35,
//           80
//         ],
//         "id": 2661,
//         "original_language": "en",
//         "original_title": "Batman",
//         "overview": "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
//         "popularity": 16.657,
//         "poster_path": "/iBaHizz1sfMs4N03aHsGe7I2G6S.jpg",
//         "release_date": "1966-07-30",
//         "title": "Batman",
//         "video": false,
//         "vote_average": 6.309,
//         "vote_count": 803
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/xEG5iP1qZCiDt4BefSpLy1d54zE.jpg",
//         "genre_ids": [
//           28,
//           12,
//           80,
//           878,
//           53,
//           10752
//         ],
//         "id": 125249,
//         "original_language": "en",
//         "original_title": "Batman",
//         "overview": "Japanese master spy Daka operates a covert espionage-sabotage organization located in Gotham City's now-deserted Little Tokyo, which turns American scientists into pliable zombies. The great crime-fighters Batman and Robin, with the help of their allies, are in pursuit.",
//         "popularity": 7.648,
//         "poster_path": "/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg",
//         "release_date": "1943-07-16",
//         "title": "Batman",
//         "video": false,
//         "vote_average": 6.305,
//         "vote_count": 64
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
//         "genre_ids": [
//           80,
//           9648,
//           53
//         ],
//         "id": 414906,
//         "original_language": "en",
//         "original_title": "The Batman",
//         "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
//         "popularity": 124.938,
//         "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//         "release_date": "2022-03-01",
//         "title": "The Batman",
//         "video": false,
//         "vote_average": 7.693,
//         "vote_count": 9096
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
//         "genre_ids": [
//           28,
//           12,
//           14
//         ],
//         "id": 209112,
//         "original_language": "en",
//         "original_title": "Batman v Superman: Dawn of Justice",
//         "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
//         "popularity": 58.619,
//         "poster_path": "/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
//         "release_date": "2016-03-23",
//         "title": "Batman v Superman: Dawn of Justice",
//         "video": false,
//         "vote_average": 5.961,
//         "vote_count": 17351
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/8pOUmMgVnl1tYNtTRTE5TeyGBGD.jpg",
//         "genre_ids": [
//           16,
//           28,
//           878
//         ],
//         "id": 485942,
//         "original_language": "ja",
//         "original_title": "ニンジャバットマン",
//         "overview": "Batman, along with many of his allies and adversaries, finds himself transported to feudal Japan by Gorilla Grodd's time displacement machine.",
//         "popularity": 16.104,
//         "poster_path": "/5xSB0Npkc9Fd9kahKBsq9P4Cdzp.jpg",
//         "release_date": "2018-06-15",
//         "title": "Batman Ninja",
//         "video": false,
//         "vote_average": 5.776,
//         "vote_count": 794
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
//         "genre_ids": [
//           28,
//           80,
//           18
//         ],
//         "id": 272,
//         "original_language": "en",
//         "original_title": "Batman Begins",
//         "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
//         "popularity": 46.789,
//         "poster_path": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
//         "release_date": "2005-06-10",
//         "title": "Batman Begins",
//         "video": false,
//         "vote_average": 7.703,
//         "vote_count": 20001
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/a21obwG9qMSf1qa6oG4ZgpOyMaA.jpg",
//         "genre_ids": [
//           16,
//           28,
//           10751,
//           35
//         ],
//         "id": 870358,
//         "original_language": "en",
//         "original_title": "Merry Little Batman",
//         "overview": "This Christmas, Damian Wayne wants to be a superhero like his dad – the one and only Batman. When Damian is left home alone while Batman takes on Gotham’s worst supervillains on Christmas Eve, he stumbles upon a villainous plot to steal Christmas and leaps at the chance to save the day.",
//         "popularity": 49.693,
//         "poster_path": "/2J70guF8wcErbYbRgZUBcvShgI1.jpg",
//         "release_date": "2023-12-08",
//         "title": "Merry Little Batman",
//         "video": false,
//         "vote_average": 6.619,
//         "vote_count": 105
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/tgPFZxhDuxWd4VXYaz8eAUznGTF.jpg",
//         "genre_ids": [
//           28,
//           878,
//           12
//         ],
//         "id": 415,
//         "original_language": "en",
//         "original_title": "Batman & Robin",
//         "overview": "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
//         "popularity": 29.884,
//         "poster_path": "/cGRDufDDSrFrv7VI4YnmWnslne0.jpg",
//         "release_date": "1997-06-20",
//         "title": "Batman & Robin",
//         "video": false,
//         "vote_average": 4.339,
//         "vote_count": 4716
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/8UHbmR3WP86BspfwZZPgsVxxCFJ.jpg",
//         "genre_ids": [
//           16,
//           35,
//           28,
//           10751,
//           878
//         ],
//         "id": 484862,
//         "original_language": "en",
//         "original_title": "Scooby-Doo! & Batman: The Brave and the Bold",
//         "overview": "Scooby-Doo and the Mystery Inc. gang meet up with Batman and other friends to defeat evil villains and save the day.",
//         "popularity": 13.969,
//         "poster_path": "/hSPeF1zoYH8kCOhFMu7x3B55zu6.jpg",
//         "release_date": "2018-01-31",
//         "title": "Scooby-Doo! & Batman: The Brave and the Bold",
//         "video": false,
//         "vote_average": 7.278,
//         "vote_count": 218
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/eoMushgujydxFplE9yPZ54lwOvo.jpg",
//         "genre_ids": [
//           16,
//           28,
//           35,
//           10751
//         ],
//         "id": 324849,
//         "original_language": "en",
//         "original_title": "The Lego Batman Movie",
//         "overview": "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
//         "popularity": 28.25,
//         "poster_path": "/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg",
//         "release_date": "2017-02-08",
//         "title": "The Lego Batman Movie",
//         "video": false,
//         "vote_average": 7.23,
//         "vote_count": 4700
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/bNMw3onveTYU7PpLQRK0HQK8JRb.jpg",
//         "genre_ids": [
//           28,
//           16,
//           80
//         ],
//         "id": 69735,
//         "original_language": "en",
//         "original_title": "Batman: Year One",
//         "overview": "A wealthy playboy named Bruce Wayne and a Chicago cop named Jim Gordon both return to Gotham City where their lives unexpectedly intersect.",
//         "popularity": 26,
//         "poster_path": "/mLZRhulJcDsxZWTdfx0trtk6y07.jpg",
//         "release_date": "2011-09-27",
//         "title": "Batman: Year One",
//         "video": false,
//         "vote_average": 7.283,
//         "vote_count": 884
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/7eccX0xay9pDj6ZQvU4cu3whw18.jpg",
//         "genre_ids": [
//           16,
//           14,
//           28,
//           9648
//         ],
//         "id": 1003579,
//         "original_language": "en",
//         "original_title": "Batman: The Doom That Came to Gotham",
//         "overview": "Explorer Bruce Wayne accidentally unleashes an ancient evil, and returns to Gotham after being away for two decades. There, Batman battles Lovecraftian supernatural forces and encounters allies and enemies such as Green Arrow, Ra's al Ghul, Mr. Freeze, Killer Croc, Two-Face and James Gordon.",
//         "popularity": 20.753,
//         "poster_path": "/dzPNQXI8FlpXTGGp1082RJ8OQoT.jpg",
//         "release_date": "2023-03-10",
//         "title": "Batman: The Doom That Came to Gotham",
//         "video": false,
//         "vote_average": 6.728,
//         "vote_count": 167
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/snlu32RmjldF9b068UURJg8sQtn.jpg",
//         "genre_ids": [
//           28,
//           80,
//           14
//         ],
//         "id": 414,
//         "original_language": "en",
//         "original_title": "Batman Forever",
//         "overview": "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
//         "popularity": 25.633,
//         "poster_path": "/mzzNBVwTiiY94xAXDMWJpNPW2US.jpg",
//         "release_date": "1995-06-16",
//         "title": "Batman Forever",
//         "video": false,
//         "vote_average": 5.416,
//         "vote_count": 4878
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/2Li2vaWeCIMYwcgC9yU3Z99LDVL.jpg",
//         "genre_ids": [
//           12,
//           14,
//           16,
//           28,
//           878
//         ],
//         "id": 21683,
//         "original_language": "en",
//         "original_title": "Batman: Mystery of the Batwoman",
//         "overview": "As if the Penguin wasn't enough to contend with, a new vigilante has surfaced in Gotham City, and her strong-arm tactics give Batman cause for concern.",
//         "popularity": 21.149,
//         "poster_path": "/mlmhpUArJdpRPO211v3lETe3uzg.jpg",
//         "release_date": "2003-10-21",
//         "title": "Batman: Mystery of the Batwoman",
//         "video": false,
//         "vote_average": 6.642,
//         "vote_count": 361
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg",
//         "genre_ids": [
//           28,
//           14
//         ],
//         "id": 364,
//         "original_language": "en",
//         "original_title": "Batman Returns",
//         "overview": "While Batman deals with a deformed man calling himself the Penguin, an employee of a corrupt businessman transforms into the Catwoman.",
//         "popularity": 28.344,
//         "poster_path": "/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
//         "release_date": "1992-06-19",
//         "title": "Batman Returns",
//         "video": false,
//         "vote_average": 6.919,
//         "vote_count": 6125
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/sA50fD5aLbYPRU0fMCHIZ88gc5g.jpg",
//         "genre_ids": [
//           16,
//           28,
//           10751
//         ],
//         "id": 581997,
//         "original_language": "en",
//         "original_title": "Batman vs Teenage Mutant Ninja Turtles",
//         "overview": "Batman, Batgirl and Robin forge an alliance with the Teenage Mutant Ninja Turtles to fight against the Turtles' sworn enemy, The Shredder, who has apparently teamed up with Ra's Al Ghul and The League of Assassins.",
//         "popularity": 24.553,
//         "poster_path": "/yP3h0Pu8htyb9450mWJ9Vu1rU.jpg",
//         "release_date": "2019-03-31",
//         "title": "Batman vs Teenage Mutant Ninja Turtles",
//         "video": false,
//         "vote_average": 7.131,
//         "vote_count": 445
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/niRgVCgvDVxD67u6gjKZnkBO1AD.jpg",
//         "genre_ids": [
//           878,
//           16,
//           28,
//           80,
//           53
//         ],
//         "id": 13851,
//         "original_language": "en",
//         "original_title": "Batman: Gotham Knight",
//         "overview": "A chronicle of Bruce Wayne's establishment and progression into Gotham City’s legendary caped crusader through 6 standalone episodes.",
//         "popularity": 23.248,
//         "poster_path": "/3i1o0sHBP0VUpuSVmkdCRKYoDBC.jpg",
//         "release_date": "2008-07-08",
//         "title": "Batman: Gotham Knight",
//         "video": false,
//         "vote_average": 6.661,
//         "vote_count": 626
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/4xFlvdymCBqyBN8Ab5i69Sgqk7m.jpg",
//         "genre_ids": [
//           28,
//           16,
//           35
//         ],
//         "id": 464882,
//         "original_language": "en",
//         "original_title": "Batman vs. Two-Face",
//         "overview": "Former Gotham City District Attorney Harvey Dent, one side of his face scarred by acid, goes on a crime spree based on the number '2'. All of his actions are decided by the flip of a defaced, two-headed silver dollar.",
//         "popularity": 14.579,
//         "poster_path": "/yTbj8Kcp4WFwMRdEejnn55KIsfH.jpg",
//         "release_date": "2017-11-14",
//         "title": "Batman vs. Two-Face",
//         "video": false,
//         "vote_average": 6.324,
//         "vote_count": 162
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/9Eh5xzWTpJeZM1FGCblWKZ8GTpw.jpg",
//         "genre_ids": [
//           878,
//           28,
//           16,
//           9648
//         ],
//         "id": 142061,
//         "original_language": "en",
//         "original_title": "Batman: The Dark Knight Returns, Part 2",
//         "overview": "Batman has stopped the reign of terror that The Mutants had cast upon his city.  Now an old foe wants a reunion and the government wants The Man of Steel to put a stop to Batman.",
//         "popularity": 25.965,
//         "poster_path": "/arEZYd6uMOFTILne9Ux0A8qctMe.jpg",
//         "release_date": "2013-01-03",
//         "title": "Batman: The Dark Knight Returns, Part 2",
//         "video": false,
//         "vote_average": 7.925,
//         "vote_count": 1379
//       }
//     ],
//     "total_pages": 9,
//     "total_results": 167
//   }