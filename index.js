
document.querySelector('#searchbox').addEventListener('click', function(e) {

      
        let namesLI = document. getElementsByClassName('item ');

    
        let searchQuery = searchInput.value.toLowerCase();

        for (let index = 0; index < namesLI.length; index++) {
                const name = namesLI[index].textContent.toLowerCase();
    
                if (name.includes(searchQuery)) {
                        namesLI[index].style.display = 'block';
                } else {
                        namesLI[index].style.display = 'none';
                }
        }
    }
    
    );
    document.querySelector('#searchbox').addEventListener('click', function(e) {

      
        let namesLI = document. querySelectorAll('#c1');
    
        let searchQuery = searchInput.value.toLowerCase();

        for (let index = 0; index < namesLI.length; index++) {
                const name = namesLI[index].textContent.toLowerCase();
    
                if (name.includes(searchQuery)) {
                        namesLI[index].style.display = 'block';
                } else {
                        namesLI[index].style.display = 'none';
                }
        }
    }
    
    );
 
