let posts = [
    {
        'author': 'NFA',
        'image': 'img/post1.jpg',
        'logo': 'img/post1logo.jpg',
        'location': 'Dallas',
        'description': 'The Dallas Cowboys win at home against the Arizona Cardinals (30-24) and secure their spot in the playoffs',
        'account': 'Frank Zane',
        'comments': 'Finally the Cowboys are back in the playoffs',
        'likes' : '23648'
    },
    {
        'author': 'Tagesshow',
        'image': 'img/post2.jpg',
        'logo': 'img/post2logo.jpg',
        'location': 'Oklahoma',
        'description': 'Erneut Demonstrationen in den USA',
        'account': 'Luis Fäth',
        'comments': 'Das Schild ist mega',
        'likes' : '4975'
    },
    {
        'author': 'Martin Rodriguez',
        'image': 'img/post3.jpg',
        'logo': 'img/post3logo.jpg',
        'location': 'Buenos Aires',
        'description': 'It was a pleasure to witness the game :)',
        'account': 'Laura Rodriguez',
        'comments': 'Really enjoy these moments with you',
        'likes' : '38'
    }

];

function render() {
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        document.getElementById('posts').innerHTML += `
        <div class="post"> 

        <div class="headline">      
        <div class="logoandauthor"> <img class="postLogo" src="${element['logo']}">  ${element['author']} </div>    
        <div> <img class="settingsimg" src="img/settings.png"> </div>
        </div>

        <div>
        <img class="postImg" src="${element['image']}">
        </div>

        <div class="belowImg">
        <div class="heartandcomment"> <img onclick="addlike(${i})" id="heart${i}" src="img/heart.png"> <img src="img/comment.png"> </div>
        <div> <img src="img/bookmark.png"> </div>
        </div>
        

        <div class="likes bold">
        Gefällt <span id="likesamount${i}">  ${element['likes']} </span> mal
        </div>

        <div class="description">
        <b> ${element['author']} </b> <span> ${element['description']} </span>
        </div>

        <div class="comments-section">
        <div class="comments-headline"> Kommentarsektion </div>
        <div id="comments${i}" class="comments"> 
          <div>  <b> ${element['account']} </b> ${element['comments']} </div>
        </div>
        </div>

        <div class="addcomments">                       
        <form onsubmit="add(${i}); return false">    
        <input class="inputName" required minlength="1" id="inputName${i}" placeholder="Name"> <input class="inputComment" required minlength="1" id="inputComment${i}" placeholder="Kommentar.."> <button class="add"> add </button>
        </form>
        </div>

        </div>
        
        
        `
    }
}

function add(i) {
    let name = document.getElementById(`inputName${i}`).value;
    let comment = document.getElementById(`inputComment${i}`).value;   
    
    document.getElementById(`comments${i}`).innerHTML += 
        `
        <div> <b> ${name} </b> ${comment} </div>
        `
    
    document.getElementById(`inputName${i}`).value = '';
    document.getElementById(`inputComment${i}`).value = '';

}

function searchauthor() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    console.log(search);

    let post = document.getElementById('posts');
    post.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let x = posts[i];
        if (x['author'].toLowerCase().includes(search)) {
            post.innerHTML += `
            <div class="post"> 

        <div class="headline">      
        <div class="logoandauthor"> <img class="postLogo" src="${x['logo']}">  ${x['author']} </div>    
        <div> <img class="settingsimg" src="img/settings.png"> </div>
        </div>

        <div>
        <img class="postImg" src="${x['image']}">
        </div>

        <div class="belowImg">
        <div class="heartandcomment"> <img onclick="addlike(${i})" id="heart${i}" src="img/heart.png"> <img src="img/comment.png"> </div>
        <div> <img src="img/bookmark.png"> </div>
        </div>
        

        <div class="likes bold">
        Gefällt <span id="likesamount${i}"> ${x['likes']} </span> mal
        </div>

        <div class="description">
        <b> ${x['author']} </b> <span> ${x['description']} </span>
        </div>

        <div class="comments-section">
        <div class="comments-headline"> Kommentarsektion </div>
        <div id="comments${i}" class="comments"> 
          <div>  <b> ${x['account']} </b> ${x['comments']} </div>
        </div>
        </div>

        <div class="addcomments">
        <input class="inputName" id="inputName${i}" placeholder="Name"> <input class="inputComment" id="inputComment${i}" placeholder="Kommentar.."> <button class="add" onclick="add(${i})"> add </button>
        </div>

        </div>
            `
        }

    }
}

function addlike(i) {
    let img = document.getElementById(`heart${i}`);
    img.src = "img/heartred.png";

    let l = +document.getElementById(`likesamount${i}`).innerHTML;
    let x = 1;
    let result = l + x;
    document.getElementById(`likesamount${i}`).innerHTML = `${result}`;
}