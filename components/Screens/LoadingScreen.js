function buildLoadingScreen(){

        $('#root').html(LoadingScreen());
        initializeLoadingScreenEventListeners();

        setTimeout(() => {
            session();
    }, 4000);

}

function LoadingScreen(user){
    const container = document.createElement('div');
    container.id = 'loading-screen';
    container.classList.add('loading-screen');

    container.innerHTML = `
    <div id="loader-container">
        <div class="loader">
            <div id="largeBox"></div>
            <div id="smallBox"></div>
        </div>
    </div>`;
return container;

}

function initializeLoadingScreenEventListeners(){

}