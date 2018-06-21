function buildLoadingScreen(){

        $('#root').html(LoadingScreen());
        initializeLoadingScreenEventListeners();

        setTimeout(() => {
            session();
    }, 2000);

}

function LoadingScreen(user){
    const container = document.createElement('div');
    container.id = 'loading-screen';
    container.classList.add('loading-screen');

    container.innerHTML = `
    <div id="loader">
        loading screen
    </div>`;
return container;

}

function initializeLoadingScreenEventListeners(){

}