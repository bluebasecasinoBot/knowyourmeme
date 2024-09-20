import { __c, __m, __SYD , __p} from "./sydneyDom_v2.js"


__SYD.container = () =>{
    console.log(`padding:${__p(['container' , 'sized'],false) ? '10px 20px' : '10px 50px'};`)
    return __c(
        'div',
        {
            style:`height:100vh;width:100vw;padding:${__p(['container' , 'sized'],false) ? '10px 20px' : '10px 50px'};background:lightgrey;overflow:scroll;position:relative;`
        },
        [
            __c(
                'div',
                {
                    style:'height:150px;width:100%;border-radius:20px;background:#13133e;display:flex;overflow:hidden;flex-direction:column;justify-content:space-between;'
                },
                [
                    __c(
                        'h1',
                        {
                            style:'color:#fff;padding:10px;padding-left:20px;font-weight:500;text-transform:capitalize;font-family:creep1'
                        },
                        [
                            'know your meme'
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'height:50px;width:100%;background:#dedddf;'
                        }
                    )
                ]
            ),
            __SYD.textBelow(),
            __SYD.imageTwo(),
            __SYD.imageOne(),
            __c(
                'div',
                {
                    style:'height:100px;width:100%;background:green;margin-top:10px;border-radius:10px;background:#171717;box-shadow:2px 2px 5px #000;font-size:14px;color:#fff;display:flex;align-items:center;padding:10px 15px;font-family:Helvetica, Arial, Verdana, sans-serif;cursor:pointer;'
                },
                [
                    __c('span' , {style:'font-size:18px;font-weight:700;'},['C.A']),
                    __c('span' , {style:'font-size:18px;font-weight:700;text-align:center;width:100%;'},['CLICK TO COPY C.A'])
                ]
            ),
            __SYD.textBelow2(),
            __SYD.contactIcons()
        ],
        {
            createState:{
                stateName:'container',
                state:{
                    sized:false
                }
            },
            mediaQuery:{
                query:[{size:'<700px' , prop:{sized:true}}],
                defState:{sized:false}
            }
        }
    )
}

__SYD.textBelow = () =>{
    return __c(
        'p',
        {
            style:`margin-top:80px;color:#171717;font-size:${__p(['container' , 'sized'],false)  ? '18px' : '25px'};margin-bottom:80px;font-family:Helvetica, Arial, Verdana, sans-serif;`
        },
        [
            `Creepy Hooded Guy, also known as $Intruder and The Albanian, refers to a police sketch of a large-eyed man wearing a black hood. The image achieved prominence online several times, first shared on 4chan's /tg/ board in 2010, and later gaining meme usage on 4chan and then on the Russian 2ch imageboard in December 2015. The image again became popularized in 2021 after appearing as "An intruder" in the Mandela Catalogue analog horror YouTube series.`
        ]
    )
}

__SYD.textBelow2 = () =>{
    return __c(
        'p',
        {
            style:`margin-top:80px;color:#171717;font-size:${__p(['container' , 'sized'],false)  ? '18px' : '25px'};margin-bottom:80px;font-family:Helvetica, Arial, Verdana, sans-serif;`
        },
        [
            `Is Crypto Space Ready For Me ?`
        ]
    )
}

__SYD.imageOne = () =>{
    return __c(
        'div',
        {
            style:'height:200px;width:100%;margin-top:30px;background-image:url("./img1.jpg");background-size:contain;background-position:0 center;background-repeat:no-repeat;'
        },[],{
            // genericStyle:['bg_fit']
        }
    )
}

__SYD.imageTwo = () =>{
    return __c(
        'div',
        {
            style:'height:200px;width:100%;margin-top:30px;background-image:url("./img2.jpg");background-size:contain;background-position:0 center;background-repeat:no-repeat;'
        }
    )
}

__SYD.contactIcons = () =>{
    return __c(
        'div',
        {
            style:'display:flex;column-gap:30px;width:100%;flex-wrap:wrap;justify-content:center;margin-top:20px;height:200px;align-items:center;background:#000;position:absolute;top:max-content;left:50%;transform:translateX(-50%)'
        },
        [
            __c('a' , {href:''},
                [
                    __c('i' , {style:'font-size:30px;height:30px;width:30px;color:#fff;' , class:'fa-brands fa-telegram'}),
                ]
            ),
            __c('a' , {href:''},
                [
                    __c('i' , {style:'font-size:30px;height:30px;width:30px;color:#fff;' , class:'fa-brands fa-square-x-twitter'}),
                ]
            )
        ]
    )
}

__m(__SYD.container())
