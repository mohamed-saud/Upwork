(function() {

    function Tags(options){
        this.arr = [];
        this.options = Object.assign(Tags.defaults , options);
        this.wrapper = document.querySelector(options.wrapper);
        addEvents(this)
    }

    // add Events
    function addEvents(tags){
        var inputController = tags.wrapper.children[1];
        tags.wrapper.addEventListener('click', function(){
            inputController.focus()
        })
        inputController.addEventListener('keydown', function(e){
            var str = inputController.value.trim();
            if( e.keyCode == 16 ){
                inputController.value = "";
                if( str != "" ){
                    tags.addTag(str)
                    tags.wrapper.children[2].value = tags.arr.join(',')
                }
            }
        })
    }

    // Defaults Tags Property
    Tags.defaults = {
        wrapper : '',
        max : null,
        duplicate: false,
    }

    // Add Tag
    Tags.prototype.addTag = function(string){
        var self = this;
        // If any errors then return without doing anything
        if(this.anyErrors(string))
            return;
        
        // Push the string in the array
        this.arr.push(string)

        // Add tag
        var containerTag = this.wrapper.children[0];
        containerTag.insertAdjacentHTML('beforeend',`
            <span class="tag bg-blue inline-block p-2 rounded mb-1 text-xs sm:text-base text-white cursor-pointer">${string}</span>`);


            
        // Delete tag
        document.querySelectorAll('.tag').forEach(element => {
            element.addEventListener('click', function(){
                var state = false;
                for(var i =0 ;i < self.arr.length ; i++){
                    if(!state){
                        if(self.arr[i] == element.innerHTML){
                            state = true;
                            self.arr.splice(i, 1)
                            element.remove()
                            self.wrapper.children[2].value = self.arr.join(',')
                        }
                    }
                }
            })
        })
    }

    
    Tags.prototype.anyErrors = function(string){
        // Prevent User from duplicate tags
        if( this.arr.indexOf(string) != -1 && !this.options.duplicate ){
            console.log('duplicate found " '+string+' " ')
            return true;
        }
    }

    window.Tags = Tags;
})()