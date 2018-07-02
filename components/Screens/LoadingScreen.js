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
    <div class="loader-container">
        <div class="loader">
            <div class="largeBox"></div>
            <div class="smallBox"></div>
        </div>
    </div>`;
return container;

}

function initializeLoadingScreenEventListeners(){

}