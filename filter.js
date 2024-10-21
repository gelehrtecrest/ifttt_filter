var title = Youtube.newVideoUploadedYt.Title;
var url = Youtube.newVideoUploadedYt.Url;

var index = url.indexOf("?v=");
var id = "";
if(index != -1){
  id = url.slice(index + 3);
} else {
  index = url.indexOf("youtu.be/");
  id = url.slice(index + 9);
}
var comment1_1 = "おはようですよーﾉ`・ω・)ﾉ";
var comment1_2 = "今日もお疲れ様ですﾉ`・ω・)ﾉ"
var comment2 = "今日の私の活動です。高画質動画はリンク先からどうぞ";
var description = Youtube.newVideoUploadedYt.Description;
var description_top_index = description.indexOf("-----");
if(description_top_index !== -1){
  comment1_1 = description.substr( 0, description_top_index );
  comment1_2 = comment1_1;
}
if(Meta.currentUserTime.hour() < 10){
  Twitter.postNewTweetWithImage.setTweet(comment1_1 +  "\n\n" + comment2 +  "\n\n" + title + " \n" + url);
} else {
  Twitter.postNewTweetWithImage.setTweet(comment1_2 +  "\n\n" + comment2 +  "\n\n" + title + " \n" + url);
}

Twitter.postNewTweetWithImage.setPhotoUrl("https://img.youtube.com/vi/" + id + "/hqdefault.jpg");