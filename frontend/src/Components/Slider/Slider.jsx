import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './Slider.css'
import { SliderInfo } from './SliderInfo'
export const Slider = ()=>{
    return(
        <Carousel infiniteLoop autoPlay>
            <div className='limage'>
                <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/24/BM8vD9IRnBd5f6wy.jpg" alt="Phones" />
                <SliderInfo name={'OPPO A76'} title={'Live without limits'} content={'*Incl. bank discount. Save extra 3% with points'} discount={'From ₹13990*'} price={'₹18999'} col={'black'} small={'*Incl. bank discount'}/>
            </div>
            <div className='limage'>
                <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/07/RUZ6Xtop7zcLiY5G.jpg" alt="Phones" />
                <SliderInfo name={'Extra save with points'} title={'Deduction retio of points decreased'} content={null} dicount={null} price={null} col={'black'} small={null}/>
            </div>
            <div className='limage'>
                <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/29/P6giIH4BdaXjDLe4.jpg" alt="Phones" />
                <SliderInfo name={'OPPO K10'} title={'Live without limits'} content={'*Incl. bank discount. Save extra 3% with points'} discount={'From ₹13990*'} price={'₹18999'} col={'white'} small={'*Incl. bank discount'}/>
            </div>
            <div className='limage'>
                <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/24/LUD96lFpQM01e0Fm.jpg" alt="Phones" />
                <SliderInfo name={'OPPO A96'} title={'33W SuperVOOC|90 Hz Display|5000 mAh Battery'} content={'*Incl. bank discount. Save extra 3% with points'} discount={'From ₹18990*'} price={'₹23999'} col={'black'} small={null}/>
            </div>
            <div className='limage'>
                <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202203/29/SrO4SjB9DjiyUyJ1.jpg" alt="Phones" />
                <SliderInfo name={'OPPO Enco Air2'} title={'Fresh Sound in the Air'} content={'Save extra 5% with points'} discount={'At ₹1999'} price={'₹2499'} col={'black'} small={null}/>
            </div>
        </Carousel>
    )
}