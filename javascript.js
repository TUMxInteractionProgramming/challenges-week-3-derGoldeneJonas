console.log("app is alive");
//change heading when switching channel
function switchChannel() {
    var channelName = event.currentTarget.innerText;
    console.log("tuning into channel: " + channelName);
    var heading = channelName + '<small> by <strong>upgrading.never.helps</strong></small><img id="favorite-star" onclick="favorize()" src="http://ip.lfe.mw.tum.de/sections/star-o.png" alt="starred">'
    $("#chat h1").html(heading);
    selectChannel();
}
// change selected tab style
function selectTab() {
    //remove selected class
    $("#tab-bar button").removeClass("selected");
    $(event.currentTarget).addClass("selected");
}
// change selected channel style
function selectChannel() {
    //remove selected class
    $("#channels li").removeClass("selected");
    $(event.currentTarget).addClass("selected");
}
//toggle emojis
function toggleEmojiVisibility() {
     $("#emojis").toggle();
}
// method to toggle star-icon on heading
function favorize(){
    if($("#favorite-star").attr("src") === "http://ip.lfe.mw.tum.de/sections/star-o.png") {
        $("#favorite-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
    }else{
        $("#favorite-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
    }
}