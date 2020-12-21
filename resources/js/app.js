require('./vendor');

(function(){

    // Navbar Menu
        var storeNavbarName;
        // Open Menu 
        document.querySelector('.navbar_toggle').addEventListener('click',function(e){
            storeNavbarName = this.getAttribute('data-target');
            document.querySelector(`${storeNavbarName}`).classList.add('open')
        })
        // Close Menu
        document.querySelector('.menu','.close-menu').addEventListener('click',function(e){
            let getElement = Array.from(e.toElement.classList);
            if(getElement.includes('menu') || getElement.includes('close-menu')){
                document.querySelector(`${storeNavbarName}`).classList.remove('open')
            }
        })  
            
    // Navbar Scroll
        var scrollPos = 0;
        window.addEventListener('scroll',function(e){
            var currentScrollPos = this.pageYOffset;
            if(currentScrollPos > 60){
                if(currentScrollPos > scrollPos){
                    document.querySelector('.navbar').classList.add('scrolling')
                }
                else{
                    document.querySelector('.navbar').classList.remove('scrolling','relative')
                    document.querySelector('.navbar').classList.add('fixed','pin-x','pin-t')
                }
                scrollPos = currentScrollPos    
            }
        })

    // Loading
        window.onload = setTimeout(function(){
            document.querySelector('.loading').classList.remove('show')
        },1000)

    // File Upload
        try{        
            document.querySelector('.upload_file').addEventListener('change',function(e){
                var fileName = this.files[0].name;
                document.querySelector('.upload_file_name').innerHTML = `( ${fileName} )`
            })
        } catch{ }
    
    // Photo Upload
        try{
            document.querySelector('.upload_image').addEventListener('change',function(){
                var fileName = this.files[0];
                var uploadImageUrl = document.querySelector('.upload_image_url');
                var reader = new FileReader();
                reader.onload = function(src) {
                    uploadImageUrl.src = src.target.result;
                };
                reader.readAsDataURL(fileName);
            })
        } catch{ }
    
    // Profile Tabs
        document.querySelectorAll('.profile_links a').forEach(element => {

            element.addEventListener('click', function(e){
                
                e.preventDefault();
                
                document.querySelectorAll('.profile_links a').forEach(link => {
                    link.classList.remove('bg-blue-light')
                })

                element.classList.add('bg-blue-light')
                var currentLink = this.getAttribute('href');
                
                document.querySelectorAll('.profile_tab').forEach(tab => {
                    tab.classList.add('hidden')
                })
                
                document.querySelector(currentLink).classList.remove('hidden')
            })
        });

    // Profile Breadcrumb 
        try{
            document.querySelector('.button_profile_menu').addEventListener('click', function(e){
                e.preventDefault()
                document.querySelector('.toggle_profile_menu').classList.toggle('open')
            })
        }catch { }
        
    // Tags
        try{
            new Tags({
                wrapper: '.required_skills'
            })
        }catch {  }

    // Dropdown
    document.querySelectorAll('.dropdown_button').forEach(button => {
        button.addEventListener('click', function(){
            var getEl = this.getAttribute('data-toggle');
            document.querySelector(getEl).classList.toggle('show')
        })
    })

})()

