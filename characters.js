var names = [
    "Lord Voldemort",
    "Hermione Granger",
    "Ronald Bilius Weasley",
    "Albus Percival Wulfric Brian Dumbledore",
    "Minerva McGonagall",
    "Rubeus Hagrid",
    "Sirius Black",
    "Severus Snape",
    "Lily Potter",
];

var info = [
    "Also known as He-Who-Shall-Not-Be-Named, The Dark Lord and Tom Marvolo Riddle, Lord Voldemort is the most powerful, evil wizard known in the wizarding world. He is the leader of the Death Eaters, a group of evil wizards and witches dedicated to ridding the Wizarding World of Muggles and establishing Voldemort as its supreme ruler. His main mortive is to kill Harry, because of the prophecy that foretold his death at Harry's hands.",
    " Of course, Harry can’t go on his journey alone, so Ronald Weasley and Hermione Granger, his 2 best friends throughout his time in Hogwarts, come along! Hermione is also the brightest witch of her age which gives her great grades but she is seen as a nerd to the other students. Hermione is a muggleborn which means that every pureblood looks down upon and judges her. She might come across as bossy and domineering to some people, but is actually very sympathetic and Harry definitely wouldn’t have completed his journey alive without her.",
    "Ronald, better known as Ron,is one of the seven (Yes,7!) Weasley children. His trademark red hair and freckles give him away. His dream is to be famous, but with Harry as his friend and having many siblings, he seems invisible to the others, going through his own struggles. Finally, he becomes famous along with Hermione because of playing a big role in defeating Voldemort.",
    "Dumbledore’s wisdom, kindly nature and charisma made him a favourite for readers and a talisman for good in the Harry Potter books (even though much was not known about him). He was the headmaster of Hogwarts and he was always keen to persuade Harry that Voldemort was incapable of the most powerful form of magic ever invented – love. Love is what kept Harry alive, and it is what keeps Voldemort from reigning supreme. That is a noble message.",
    "As head of Gryffindor house, Minerva McGonagall is one of Harry’s strictest professors at Hogwarts School of Witchcraft and Wizardry. She’s scary and stern but always fair, even when it comes to taking points away from her own house. She is an animagus (a cat) and is named after the Roman goddess of Wisdom.",
    "He might not be the strongest or the coolest character in the series, but Hagrid is perhaps the most loving and warm-hearted man in the entire Wizarding World. He has no family except his half brother Grawp, and his dog Fang. He was the one who came to deliver Harry's first Hogwarts letter to him. He is a half giant, and Keeper of Keys and Grounds at Hogwarts.",
    "Sirius Black is one of the Wizarding World’s most charming and entertaining characters. Born into a pure-blood family that despised muggles and half-bloods, Sirius was the first member of his family to be sorted into Gryffindor instead of Slytherin. As James Potter’s closest friend and Harry’s godfather, Sirius was a strong-willed, loyal and endlessly compassionate individual, who was willing to sacrifice his family and eventually give his life to fight for what he believed in. It is also known that Sirius was an unregistered animagus (a black dog), along with his three best friends James Potter (a stag), Peter Pettigrew (a rat), and Remus Lupin (though he was a werewolf). He also was one of the 4 makers of the Marauders Map.",
    "The often sarcastic and cruel potions master is undoubtedly the most complex character in J.K. Rowling’s world. Snape is a respected professor at Hogwarts, a member of the Order of the Phoenix and is arguably Dumbledore’s most trusted ally. We’re still not sure why he did the right thing (Was it all for Lily?), but what’s important is that when push came to shove, he sacrificed everything to help Harry defeat Voldemort.",
    "Lily Potter was an English Muggle-born witch, the younger daughter of Mr and Mrs Evans, and the younger sister of Petunia Evans (Mrs. Dursely). She learnt of her magical existence as a child, when Severus Snape recognised her as a witch and told her of the existence of magic. She saved Harry with the most powerful weapon in this world - love. Her patronus was the counter-part of her husband's; a doe.",
];

var images = [
    "https://th.bing.com/th/id/Rd978b05956574e9fe36a66dd2ba8b05f?rik=rL480tjOoWE5QA&riu=http%3a%2f%2fmedia2.intoday.in%2findiatoday%2fimages%2fstories%2f2014January%2fvoldemort_650_010714101957.jpg&ehk=MdKDV9nxcNn2rxOokzU6D5GQbYUXH1SE71F7nuYorZU%3d&risl=&pid=ImgRaw",
    "https://th.bing.com/th/id/OIP.vwzbhRXV0U5sDsOy5toSdwHaKS?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R63e48e83f46ef4696d798e7527ef2bf0?rik=FRYRr2ct%2bx0t1Q&riu=http%3a%2f%2fmedia3.popsugar-assets.com%2ffiles%2f2015%2f08%2f24%2f769%2fn%2f1922283%2f9f91c701_edit_img_image_13839_1310694590.xxxlarge.jpg&ehk=iLlIS%2bUXMYjWh%2frCRL5epcx3zgP687%2fjeuyEIiL6YDE%3d&risl=&pid=ImgRaw",
    "https://th.bing.com/th/id/OIP.FAUxKl81Cp1WHg8wgZPoLAHaLM?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.2x11sILKofOd5oeGZ3uC3wHaLL?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R479c69405892a31f17292ecda576e10d?rik=mFXEkaFoNEUqmw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_FFiQxGc6PXc%2fTMQmAnfcsRI%2fAAAAAAAAADk%2fOrLZACF1lBQ%2fs1600%2fHagrid.jpg&ehk=%2bBFXwhmPDkKqBiRJNDFkatUOQRtaBCIHhtBDXPyecCk%3d&risl=&pid=ImgRaw",
    "https://th.bing.com/th/id/OIP.jXRrdvUl7-EEDHIhvma7RAHaJ4?pid=ImgDet&rs=1",
    "https://img.thrfun.com/img/006/084/snape_costume_x.jpg",
    "https://th.bing.com/th/id/OIP.Mu92F_F-u3lvqQWqabhOxgAAAA?pid=ImgDet&rs=1",

];

var i = 0;

function nextslide() {
    document.getElementById("Character1").innerHTML = names[i];
    document.getElementById("Character1Info").innerHTML = info[i];
    document.getElementById("album").src = images[i];
    i++;
}
