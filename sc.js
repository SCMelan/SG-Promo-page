
function starspage () {
   document.location.assign('stars.html')
}

function goToMainPage () {
    document.location.assign('index.html')
}

function reload () {
    location.reload()
}

function goToEnemys () {
    document.location.assign('enemys.html')
}

function goToTeams () {
    document.location.assign('teams.html')
}

function goToHistory () {
    document.location.assign('SG-Promo-page/history.html')
}

let a = 1

function hideText (){
        switch (a) {
            case 1: document.querySelectorAll('#MorgText').forEach(item=>item.style.display = 'inline')
                return a=0
            case 0: document.querySelectorAll('#MorgText').forEach(item=>item.style.display = 'none')
                return a=1
            default:
        }
}

function hideText1 () {
    switch (a)
        {
            case 1:document.querySelectorAll('#ZoeText').forEach(item=>item.style.display = 'inline')
                return a=0
            case 0:document.querySelectorAll('#ZoeText').forEach(item=>item.style.display = 'none')
                return a=1
            default:
        }
    
}

function hideText2 () {
    switch (a) 
        {
            case 1: document.querySelectorAll('#FiddleText').forEach(item=>item.style.display= 'inline')
                return a=0
            case 0: document.querySelectorAll('#FiddleText').forEach(item=>item.style.display = 'none')
                return a=1
            default:
        }
}

const tabContent = Array.from(document.querySelectorAll('#TabSlide'))

const tabBtns = document.querySelectorAll('.tabs')
const tabInfo = document.querySelectorAll('.tab')

for (let i =0; i<tabBtns.length;i++) {
    tabBtns[i].addEventListener('click', (event)=> {
        for ( let t=0; t < tabBtns.length; t++ ) {
            tabBtns[t].classList.remove('active')
        }
        event.target.classList.add('active')
        for ( let t=0; t < tabBtns.length; t++ ) {
            tabInfo[t].classList.remove('is_active')
        }
        tabInfo[i].classList.add('is_active')
    })
}

ShowAhriHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#AhriShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#AhriShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowAhriBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#AhriBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#AhriBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}


ShowMFHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#MFShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#MFShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowMFBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#MFBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#MFBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSyndraHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SyndraShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SyndraShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSyndraBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SyndraBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SyndraBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSorakaHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SorakaShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SorakaShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSorakaBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SorakaBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SorakaBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEzrealHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#EzrealShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#EzrealShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEzrealBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#EzrealBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#EzrealBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowJannaHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#JannaShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#JannaShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowJannaBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#JannaBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#JannaBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowLuluHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#LuluShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#LuluShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowLuluBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#LuluBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#LuluBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowLuxHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#LuxShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#LuxShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowLuxBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#LuxBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#LuxBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowPoppyHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#PoppyShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#PoppyShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowPoppyBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#PoppyBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#PoppyBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowJinxHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#JinxShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#JinxShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowJinxBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#JinxBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#JinxBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowXayahHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#XayahShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#XayahShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowXayahBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#XayahBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#XayahBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSennaHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SennaShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SennaShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSennaBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SennaBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SennaBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSeraphineHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SeraphineShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SeraphineShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSeraphineBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SeraphineBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SeraphineBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowOriannaHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#OriannaShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#OriannaShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowOriannaBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#OriannaBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#OriannaBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowGwenHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#GwenShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#GwenShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowGwenBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#GwenBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#GwenBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowRakanHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#RakanShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#RakanShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowRakanBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#RakanBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#RakanBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowRellHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#RellShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#RellShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowRellBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#RellBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#RellBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowQuinnHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#QuinnShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#QuinnShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowQuinnBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#QuinnBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#QuinnBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowNeekoHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#NeekoShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#NeekoShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowNeekoBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#NeekoBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#NeekoBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowKaiSaHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#KaiSaShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#KaiSaShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowKaiSaBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#KaiSaBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#KaiSaBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowAkaliHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#AkaliShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#AkaliShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowAkaliBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#AkaliBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#AkaliBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowNilahHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#NilahShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#NilahShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowNilahBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#NilahBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#NilahBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowSonaHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SonaShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SonaShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowSonaBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#SonaBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#SonaBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowEkkoHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#EkkoShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#EkkoShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEkkoBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#EkkoBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#EkkoBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}
ShowTaliyahHistory = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#TaliyahShow').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#TaliyahShow').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowTaliyahBio = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#TaliyahBio').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#TaliyahBio').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent1History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event1Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event1Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent1P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event1P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event1P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}

ShowEvent2History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event2Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event2Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent2P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event2P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event2P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent3History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event3Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event3Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent3P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event3P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event3P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent4History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event4Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event4Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent4P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event4P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event4P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent5History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event5Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event5Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent5P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event5P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event5P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent6History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event6Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event6Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent6P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event6P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event6P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent7History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event7Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event7Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent7P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event7P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event7P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent8History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event8Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event8Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent8P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event8P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event8P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent9History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event9Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event9Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent9P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event9P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event9P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent10History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event10Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event10Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent10P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event10P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event10P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent11History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event11Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event11Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent11P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event11P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event11P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
ShowEvent12History = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event12Show').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event12Show').forEach(item=>item.style.display= 'flex')
        return a=0
    }
}

ShowEvent12P = () => {
    switch (a) 
    {
        case 0: document.querySelectorAll('#Event12P').forEach(item=>item.style.display = 'none')
        return a=1
        case 1: document.querySelectorAll('#Event12P').forEach(item=>item.style.display= 'block')
        return a=0
    }
}
