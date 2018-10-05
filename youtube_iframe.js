

    // YouTubeの埋め込み
        function onYouTubeIframeAPIReady() {
            ytPlayer01 = new YT.Player(
                'youtube01', // 埋め込む場所をIDで設定
                {
					height: '100%',
					width: '100%',
                    videoId: 'or5A_ZzB6YI', // YouTubeのIDを指定
                    playerVars: {
                        loop: 1,//0:ループしない 1:ループする 1の場合playlist設定必須
                        playlist: 'or5A_ZzB6YI',//次に流すYoutubeのID
                        controls: 0,//コントローラー無し
                        autoplay: 1,//オートプレイ
                        showinfo: 0//動画タイトルなど表示しない
                    },
                    // events: {
                    //     'onReady': onPlayerReady
                    // }
                }
            );

            ytPlayer02 = new YT.Player(
                'youtube02', // 埋め込む場所をIDで設定
                {
					height: '100%',
					width: '100%',
                    videoId: 'f4ePWA0tR4M', // YouTubeのIDを指定
                    playerVars: {
                        loop: 1,//0:ループしない 1:ループする 1の場合playlist設定必須
                        playlist: 'f4ePWA0tR4M',//次に流すYoutubeのID
                        controls: 0,//コントローラー無し
                        autoplay: 1,//オートプレイ
                        showinfo: 0//動画タイトルなど表示しない
                    },
                    // events: {
                    //     'onReady': onPlayerReady
                    // }
                }
            );
        }
    //プレイ準備完了後
        function onPlayerReady(event) {
            event.target.playVideo();
            event.target.mute();
        }


