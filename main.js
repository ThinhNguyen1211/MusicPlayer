const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const playlistWrap = $('.playlist-wrap');
const author = $('header h3')
const songName = $('header h4')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const repeatBtn = $('.btn-repeat')
const randomBtn = $('.btn-random')
const durationTime = $('.progress-time__duration')
const currentTime = $('.progress-time__current')
const currentProgress = $('.progress__value')
const progressBar = $('.progress')
const progressValue = $('.progress__value')
const volumeChangeBar = $('.volume-change__bar')
const volumeChangeValue = $('.volume-change__value')
const volumeChangeIcon = $('.volume-change__icon')
const btnPlayIcon = $('.btn__play--play-icon');
const btnPauseIcon = $('.btn__play--pause-icon');


const app = {
    currentIndex: 0,
        songs: [
        { 
            name: 'Dalatmango',
            singer: 'PC',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/dalatmango.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/dalatmango.jpg'  
        },
        { 
            name: 'Mây Lang Thang',
            singer: 'Tùng TeA & PC',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/maylangthang.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/maylangthang.jpg'  
        },
        { 
            name: 'Phiêu Bồng',
            singer: 'Tofu',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/phieubong.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/phieubong.jpg'  
        },
        { 
            name: 'Ánh Chiều',
            singer: 'DICK ft XÁM',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/anhchieu.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/anhchieu.jpg'  
        },
        { 
            name: 'Có Hạt Sương Trên Mắt Em',
            singer: 'NHA x DICK x XÁM',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/cohatsuongtrenmatem.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/cohatsuongtrenmatem.jpg'  
        },
        { 
            name: 'Hometown',
            singer: 'Sol7 x LDleKING',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/hometown.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/hometown.jpg'  
        },
        { 
            name: 'Side Effects',
            singer: 'Rhymastic & B-Wine',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/sideeffects.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/sideeffects.jpg'  
        },
        { 
            name: 'Raindrop',
            singer: 'Sol7 x Pjnboys',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/raindrop.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/raindrop.jpg'  
        },
        { 
            name: 'Slow Down',
            singer: 'Seachains ft Summer Vee',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/slowdown.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/slowdown.jpg'  
        },
        { 
            name: 'An Thần',
            singer: 'Low G ft Thắng',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/anthan.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/anthan.jpg'  
        },
        { 
            name: 'Đi Qua Mùa Hạ',
            singer: 'Thái Đinh',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/diquamuaha.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/diquamuaha.jpg'  
        },
        { 
            name: 'MAI VỀ',
            singer: 'Dfoxie37 x Myhai',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/maive.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/maive.jpg'  
        },
        { 
            name: '23:40',
            singer: 'Hào',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/2340.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/2340.jpg'  
        },
        { 
            name: 'baby gudnite',
            singer: 'willistic',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/babygudnite.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/babygudnite.jpg'  
        },
        { 
            name: 'Dự Báo Thời Tiết Hôm Nay Mưa',
            singer: 'GREY D',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/dubaothoitiethomnaymua.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/dubaothoitiethomnaymua.jpg'  
        },
        { 
            name: 'Chết Trong Em',
            singer: 'Thịnh Suy',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/chettrongem.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/chettrongem.jpg'  
        },
        { 
            name: 'Lộn Xộn ll',
            singer: 'Đen',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/lonxon2.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/lonxon2.jpg'  
        },
        { 
            name: 'Mười Năm',
            singer: 'Đen ft Ngọc Linh',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/muoinam.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/muoinam.jpg'  
        },
        { 
            name: 'Một Triệu Like',
            singer: 'Đen ft Thành Đồng',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/mottrieulike.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/mottrieulike.jpg'  
        },
        { 
            name: 'Thanh Xuân',
            singer: 'Da LAB',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/thanhxuan.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/thanhxuan.jpg'  
        },
        { 
            name: 'Cô Gái Bàn Bên',
            singer: 'Đen ft Lynk Lee',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/cogaibanben.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/cogaibanben.jpg'  
        },
        { 
            name: 'Bài Này Chill Phết',
            singer: 'Đen ft. MIN',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/bainaychillphet.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/bainaychillphet.jpg'  
        },
        { 
            name: 'TRƯỚC KHI TUỔI TRẺ NÀY ĐÓNG LỐI',
            singer: 'Ngắn x Xám x Dick',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/truockhituoitrenaydongloi.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/truockhituoitrenaydongloi.jpg'  
        },
        { 
            name: 'Có Em',
            singer: 'Madihu ft Low G',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/coem.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/coem.jpg'  
        },
        { 
            name: 'Cứ Chill Thôi',
            singer: 'Chillies',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/cuchillthoi.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/cuchillthoi.jpg'  
        },
        { 
            name: 'Treasure',
            singer: 'Rhymastic',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/treasure.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/treasure.jpg'  
        },
        { 
            name: 'Khi Màn Hình Tắt',
            singer: 'Rhymastic',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/khimanhinhtat.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/khimanhinhtat.jpg'  
        },
        { 
            name: 'LẠC',
            singer: 'Rhymastic',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/lac.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/lac.jpg'  
        },
        { 
            name: 'LUX',
            singer: 'KOO ft NGUYÊN',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/lux.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/lux.jpg'  
        },
        { 
            name: 'AI BIET',
            singer: 'WEAN',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/aibiet.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/aibiet.jpg'  
        },
        { 
            name: 'mot nguoi vi em (midnight)',
            singer: 'WEAN',
            path: 'https://thinhnguyen1211.github.io/MusicPlayer/Music/motnguoiviem.mp3',
            image: 'https://thinhnguyen1211.github.io/MusicPlayer/Pics/motnguoiviem.jpg'  
        },
    ],

    render: function(){
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb" 
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body ellipsis text">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="waves-loading">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <div class="option text">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents : function(){
        const _this = this
        addFavorite = function() {
            $('.heart-icon').style.display = 'none'
            $('.heart-icon-red').style.display = 'block'
        }
        
        removeFavorite = function() {
            $('.heart-icon').style.display = 'block'
            $('.heart-icon-red').style.display = 'none'
        }
        showPlaylist = function() {
            playlistWrap.classList.add('active')
        }
        hidePlaylist = function() {
            playlistWrap.classList.remove('active')
        }
        // Xử lý drag chuột thì progress bar thay đổi
        // Xử lý khi nhấp chuột thôi
        let isDragging = false
        document.addEventListener('mousedown', (e) => {
            if (e.target.closest('.progress')) {
              isDragging = true;
              const mouseX = e.clientX - progressBar.getBoundingClientRect().left;
              const progressBarWidth = progressBar.offsetWidth;
              let percent = Math.floor((mouseX / progressBarWidth) * 100);
              if(percent < 0) {
                percent = 0
              }
              if(percent > 100) {
                percent = 100
              }
              if (percent >= 0 && percent <= 100) {
                progressValue.style.width = `${percent}%`;
                } else if (percent < 0) {
                progressValue.style.width = `1%`;
                } else if (percent > 100) {
                progressValue.style.width = `99%`;
            }
              audio.currentTime = (percent / 100) * audio.duration;
            }
        });
        // Xử lý khi đang drag
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
              const mouseX = e.clientX - progressBar.getBoundingClientRect().left;
              const progressBarWidth = progressBar.offsetWidth;
              let percent = Math.floor((mouseX / progressBarWidth) * 100);
              if(percent < 0) {
                percent = 0
              }
              if(percent > 100) {
                percent = 100
              }
                if (percent >= 0 && percent <= 100) {
                progressValue.style.width = `${percent}%`;
                } else if (percent < 0) {
                progressValue.style.width = `1%`;
                } else if (percent > 100) {
                progressValue.style.width = `99%`;
                }
                audio.pause()
                $('.player').classList.remove('playing')
                audio.currentTime = (percent / 100) * audio.duration;
            }
        });
        // Xử lý khi nhả chuột
        document.addEventListener('mouseup', () => {
            if(isDragging) {
                isDragging = false;
                audio.play()
                $('.player').classList.add('playing')
            }
        });
        // kết thúc xử lý
        // Xử lý volume change bar 
        let percentVolume = audio.volume * 100;
        let isDraggingVolume = false
        document.addEventListener('mousedown', (e) => {
        if (e.target.closest('.volume-change__bar')) {
        isDraggingVolume = true;
        const mouseXVolume = e.clientX - volumeChangeBar.getBoundingClientRect().left;
        const volumeChangeBarWidth = volumeChangeBar.offsetWidth;
        let percent = Math.floor((mouseXVolume / volumeChangeBarWidth) * 100);
        percentVolume = percent / 100;
        if (percent >= 0 && percent <= 100) {
            volumeChangeValue.style.width = `${percent}%`;
        } else if (percentVolume < 0) {
            percentVolume = 0;
            volumeChangeValue.style.width = `0%`;
        } else if (percentVolume > 1) {
            percentVolume = 1;
            volumeChangeValue.style.width = `100%`;
        }
        audio.volume = percentVolume;
        }
        });
        // muted volume
        toggleMuted = function() {
            if (audio.volume === 0) {
              audio.volume = lastVolume;
            } else {
              lastVolume = audio.volume;
              audio.volume = 0;
            }
            volumeChangeIcon.classList.toggle('text')
            volumeChangeIcon.classList.toggle('muted')
            if (volumeChangeIcon.classList.contains('muted')) {
              volumeChangeValue.style.width = `0%`
            } else {
              volumeChangeValue.style.width = `${lastVolume * 100}%`
            }
          }          
        // Xử lý khi đang drag
        document.addEventListener('mousemove', (e) => {
            if (isDraggingVolume) {
              const mouseXVolume = e.clientX - volumeChangeBar.getBoundingClientRect().left;
              const volumeChangeBarWidth = volumeChangeBar.offsetWidth;
              let percent = Math.floor((mouseXVolume / volumeChangeBarWidth) * 100);
              let percentVolume = percent / 100
              if (percent >= 0 && percent <= 100) {
                volumeChangeValue.style.width = `${percent}%`;
                } else if (percentVolume < 0) {
                percentVolume = 0;
                volumeChangeValue.style.width = `0%`;
                } else if (percentVolume > 1) {
                percentVolume = 1;
                volumeChangeValue.style.width = `100%`;
                }
              audio.volume = percentVolume
              volumeChangeValue.style.width = `${percent}%`;
            }
        });
        // Xử lý khi nhả chuột
        document.addEventListener('mouseup', () => {
            if(isDraggingVolume) {
                isDraggingVolume = false;
            }
        });
        // kết thúc xử lý
        // Xử lý khi touched
        let isDraggingRes = false
        document.addEventListener('touchstart', (e) => {
            if (e.target.closest('.progress')) {
              isDraggingRes = true;
              const mouseX = e.touches[0].clientX - progressBar.getBoundingClientRect().left;
              const progressBarWidth = progressBar.offsetWidth;
              let percent = Math.floor((mouseX / progressBarWidth) * 100);
              if(percent < 0) {
                percent = 0
              }
              if(percent > 100) {
                percent = 100
              }
              if (percent >= 0 && percent <= 100) {
                progressValue.style.width = `${percent}%`;
                } else if (percent < 0) {
                progressValue.style.width = `1%`;
                } else if (percent > 100) {
                progressValue.style.width = `99%`;
            }
              audio.currentTime = (percent / 100) * audio.duration;
            }
        });
        // Xử lý khi đang drag
        document.addEventListener('touchmove', (e) => {
            if (isDraggingRes) {
              const mouseX = e.touches[0].clientX - progressBar.getBoundingClientRect().left;
              const progressBarWidth = progressBar.offsetWidth;
              let percent = Math.floor((mouseX / progressBarWidth) * 100);
              if(percent < 0) {
                percent = 0
              }
              if(percent > 100) {
                percent = 100
              }
                if (percent >= 0 && percent <= 100) {
                progressValue.style.width = `${percent}%`;
                } else if (percent < 0) {
                progressValue.style.width = `1%`;
                } else if (percent > 100) {
                progressValue.style.width = `99%`;
                }
                audio.pause()
                $('.player').classList.remove('playing')
                audio.currentTime = (percent / 100) * audio.duration;
            }
        });
        // Xử lý khi nhả tay ra
        document.addEventListener('touchend', () => {
            if(isDraggingRes) {
                isDraggingRes = false;
                audio.play()
                $('.player').classList.add('playing')
            }
        });
        // kết thúc xử lý
        // Xử lý volume change bar 
        let isDraggingVolumeRes = false
        document.addEventListener('touchstart', (e) => {
            if (e.target.closest('.volume-change__bar')) {
              isDraggingVolumeRes = true;
              const mouseXVolume = e.touches[0].clientX - volumeChangeBar.getBoundingClientRect().left;
              const volumeChangeBarWidth = volumeChangeBar.offsetWidth;
              let percent = Math.floor((mouseXVolume / volumeChangeBarWidth) * 100);
              let percentVolume = percent / 100
              if (percent >= 0 && percent <= 100) {
                volumeChangeValue.style.width = `${percent}%`;
                } else if (percentVolume < 0) {
                percentVolume = 0;
                volumeChangeValue.style.width = `1%`;
                } else if (percentVolume > 1) {
                percentVolume = 1;
                volumeChangeValue.style.width = `99%`;
                }
              audio.volume = percentVolume
              volumeChangeValue.style.width = `${percent}%`;
            }
        });
        // Xử lý khi đang drag
        document.addEventListener('touchmove', (e) => {
            if (isDraggingVolumeRes) {
              const mouseXVolume = e.touches[0].clientX - volumeChangeBar.getBoundingClientRect().left;
              const volumeChangeBarWidth = volumeChangeBar.offsetWidth;
              let percent = Math.floor((mouseXVolume / volumeChangeBarWidth) * 100);
              let percentVolume = percent / 100
              if (percent >= 0 && percent <= 100) {
                volumeChangeValue.style.width = `${percent}%`;
                } else if (percentVolume < 0) {
                percentVolume = 0;
                volumeChangeValue.style.width = `1%`;
                } else if (percentVolume > 1) {
                percentVolume = 1;
                volumeChangeValue.style.width = `99%`;
                }
              audio.volume = percentVolume
              volumeChangeValue.style.width = `${percent}%`;
            }
        });
        // Xử lý khi nhả tay ra
        document.addEventListener('touchend', () => {
            if(isDraggingVolumeRes) {
                isDraggingVolumeRes = false;
            }
        });
        // Kết thúc xử lý
        playAndStopBtn = function() {
            $('.player').classList.toggle('playing')
            if ($('.player').classList.contains('playing')) {
                audio.play()
            }else{
                audio.pause()
            }
        }
        audio.onloadedmetadata = () => {
            durationTime.innerText = timeFormat(audio.duration);
        }
        let currentPercents = 0;
        audio.addEventListener('timeupdate', () => {
          currentPercents = Math.floor((audio.currentTime / audio.duration) * 100);
          currentProgress.style.width = currentPercents + '%';
        });
        audio.ontimeupdate = () => {
            currentTime.innerText = timeFormat(audio.currentTime);
        };
        // Control buttons
        window.addEventListener('load', function() {
            const listSongs = $$('.song')
            listSongs.forEach((song, index) => {
                song.onclick = function() {
                    playList[_this.currentIndex].classList.remove("active");
                    _this.currentIndex = index
                    playList[_this.currentIndex].classList.add("active");
                    _this.loadCurrentSong()
                    audio.play()
                    $('.player').classList.add('playing')
                }
            })
            const playList = $$(".song");
            playList[_this.currentIndex].classList.add("active");
            audio.onended = function() {
                const playList = $$(".song");
                playList[_this.currentIndex].classList.remove("active");
                _this.currentIndex += 1
                if(_this.currentIndex >= _this.songs.length){
                    _this.currentIndex = 0;
                }
                playList[_this.currentIndex].classList.add("active");
                _this.loadCurrentSong()
                audio.play()
                $('.player').classList.add('playing')
            }
            nextBtn.onclick = function() {
                playList[_this.currentIndex].classList.remove("active");
                _this.currentIndex += 1
                if(_this.currentIndex >= _this.songs.length){
                    _this.currentIndex = 0;
                }
                playList[_this.currentIndex].classList.add("active");
                _this.loadCurrentSong()
                audio.play()
                $('.player').classList.add('playing')
            }
            prevBtn.onclick = function() {
                playList[_this.currentIndex].classList.remove("active");
                _this.currentIndex -= 1
                if(_this.currentIndex < 0){
                    _this.currentIndex = _this.songs.length - 1;
                }
                playList[_this.currentIndex].classList.add("active");
                _this.loadCurrentSong()
                audio.play()
                $('.player').classList.add('playing')
            }
            randomBtn.onclick = function() {
                randomBtn.classList.toggle('text')
                if(randomBtn.classList.contains('text')){
                    audio.onended = function() {
                        playList[_this.currentIndex].classList.remove("active");
                        _this.currentIndex += 1
                        playList[_this.currentIndex].classList.add("active");
                        if(_this.currentIndex >= _this.songs.length){
                            playList[_this.currentIndex].classList.remove("active");
                            _this.currentIndex = 0;
                            playList[_this.currentIndex].classList.add("active");
                        }
                        _this.loadCurrentSong()
                        audio.play()
                        $('.player').classList.add('playing')
                    }
                }else{
                    repeatBtn.classList.add('text')
                    audio.onended = function() {
                        playList[_this.currentIndex].classList.remove("active");
                        _this.currentIndex = Math.floor(Math.random() * _this.songs.length) 
                        playList[_this.currentIndex].classList.add("active");
                        _this.loadCurrentSong()
                        audio.play()
                        $('.player').classList.add('playing')
                    }
                }
            }
            repeatBtn.onclick = function() {
                repeatBtn.classList.toggle('text')
                if(repeatBtn.classList.contains('text')){
                    audio.onended = function() {
                        playList[_this.currentIndex].classList.remove("active");
                        _this.currentIndex += 1
                        playList[_this.currentIndex].classList.add("active");
                        if(_this.currentIndex >= _this.songs.length){
                            playList[_this.currentIndex].classList.remove("active");
                            _this.currentIndex = 0;
                            playList[_this.currentIndex].classList.add("active");
                        }
                        _this.loadCurrentSong()
                        audio.play()
                        $('.player').classList.add('playing')
                    }
                }else{
                    randomBtn.classList.add('text')
                    audio.onended = function() {
                        playList[_this.currentIndex].classList.remove("active");
                        _this.currentIndex = _this.currentIndex 
                        playList[_this.currentIndex].classList.add("active");
                        _this.loadCurrentSong()
                        audio.play()
                        $('.player').classList.add('playing')
                    }
                }
            }
        })
        // End
        timeFormat = function(time) {
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);
            let formattedTime = `0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            return formattedTime;
        }
        document.addEventListener("keydown", function(e) {
            // phím space
            if (e.which === 32) {
                playAndStopBtn()
            }
            // mũi tên qua trái
            if (e.which === 37) {
                audio.currentTime -= 5
            }
            // mũi tên qua phải
            if (e.which === 39) {
                audio.currentTime += 5
            }
        });
        window.onload = function() {
            $('.playlist-wrap').classList.remove('active');
        };
    },

    loadCurrentSong: function() {
        author.textContent = this.currentSong.singer
        songName.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    start: function() {

        this.handleEvents()

        this.defineProperties()

        this.loadCurrentSong()

        this.render()
    },
}

app.start()
