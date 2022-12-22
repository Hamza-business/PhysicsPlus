document.body.querySelector(".navbar").innerHTML +=`
<div class="navbar-brand">
    <a class="navbar-item logo" href="/">
        <img src="/assets/images/logo.jpeg">
    </a>

    <a class="navbar-burger" aria-expanded="false" data-target="navbarBasicExample" onclick="navshow()" wfd-invisible="true">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</div>

<div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
        <div class="navbar-item field noneM">
            <p class="control has-icons-right">
                <input class="input sebut" type="search" placeholder="What do you want to learn?">
                <span class="icon is-small is-right">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>
    </div>

    <div class="navbar-end">
        <div class="navbar-item buttonG">
            <!-- <a class="navbar-item" href="/account"><i class="fas fa-user-circle"></i> account</a> -->
            <div class="buttons">
                <a class="button phys noBg" href="/login">Log in</a>
                <a class="button phys" href="/register">Sign up</a>
            </div>
        </div>

        <div class="navbar-item is-hoverable">
            <div class="burgerIcon navbar-link">
                <i class="fas fa-stream"></i>
            </div>
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/"><i class="fas fa-home"></i> Home</a>
                <a class="navbar-item" href="/lectures"><i class="fas fa-tv"></i> Lectures</a>
            </div>
        </div>
    </div>
</div>
`

try{
    document.body.querySelector(".footer").innerHTML +=`
    <div class="container has-text-left">
        <div class="columns">

            <div class="column is-4">
                <img src="/assets/images/logo2.jpeg">
                <p class="has-text-left desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam minus nulla, quo commodi earum eum repellat perspiciati</p>
                
                <div class="is-flex">
                    <div class="location">
                        <a href="" class="locationLink" title="">
                            <i class="fas fa-map-marker-alt"></i><label> City Name</label></a>
                    </div>
                    <a href="" class="social1 has-background-info-dark"><i class="fab fa-facebook-f"></i></a>
                    <a href="" class="social1 has-background-danger-dark"><i class="fab fa-youtube"></i></a>
                </div>
            </div>

            <div class="column is-2">
                <h4 class="subtitle is-5">Important Links</h4>
                <div>
                    <li><a href="/support/">Support</a></li>
                    <li><a href="/PrivacyPolicy/">Privacy Policy</a></li>
                    <li><a href="/TermsAndCondition/">Terms & Condition</a></li>
                    <li><a href="/about/">About Us</a></li>
                </div>
            </div>

            <div class="column is-3">
                <h4 class="subtitle is-5">Contact</h4>
                <div>
                    <li><a href="/contact/"><i class="fas fa-headset"></i> Contact Plus</a></li>
                    <li><a href="tel:3093004275"><i class="fas fa-phone-alt"></i> 3093004275</a></li>
                    <li><a href="mailto:contact@physicsPlus.com"><i class="fas fa-envelope"></i> contact@physicsPlus.com</a></li>
                </div>
            </div>

            <div class="column is-3">
                <h4 class="subtitle is-5">PayWays</h4>
                <span class="pImg"><img src="/assets/images/fod.png" alt="fodaphon"></span>
                <span class="pImg"><img src="/assets/images/op.png" alt="op"></span>
                <span class="pImg"><img src="/assets/images/opay.png" alt="opay"></span>
                <span class="pImg"><img src="/assets/images/vis.png" alt="visa"></span>
                <span class="pImg"><img src="/assets/images/f1.jpg" alt="fawry"></span>
                <span class="pImg"><img src="/assets/images/f2.png" alt="fofe"></span>
            </div>
        </div>
    </div>
    `
    
    
    document.body.querySelector(".licens").innerHTML +=`
    <div class="container is-fluid">
        <div class="has-text-centered">
            <p class="subtitle is-6">
                تم تصميم المنصة بواسطة <a href="https://www.facebook.com/HamzaElkotp/">حمزة القطب</a>
                والتطوير بواسطة <a href="https://www.linkedin.com/in/mmostafa261">محمد مصطفى</a> <br>
                جميع الحقوق محفوظة &copy;
            </p>
        </div>
    </div>
    `
}catch(re){
    re
}

function navshow(){
    if (document.getElementById('navbarBasicExample').style.display == 'block'){
        document.getElementById('navbarBasicExample').style.display = 'none';
    }

    else{
        document.getElementById('navbarBasicExample').style.display = 'block';
    }
}

window.addEventListener('scroll', ()=>{
    let navBar = document.getElementById("navBar")
    if(window.scrollY == 0){   
        navBar.classList.remove("move");
    }
    else{
        navBar.classList.add("move");
    }
})


