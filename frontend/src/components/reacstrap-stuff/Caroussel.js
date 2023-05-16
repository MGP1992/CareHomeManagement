import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Caroussel.css'

const items = [
  {
    src: 'https://i.imgur.com/QuoaRou.jpg',
    altText: 'Slide 1',
    caption: '',
  },
  {
    src: 'https://i.imgur.com/4VE5s2m.jpg',
    altText: 'Slide 2',
    caption: '',
  },
  {
    src: 'https://i.imgur.com/HZkv3MK.jpg',
    altText: 'Slide 3',
    caption: ''
  }
];

const imgSize = {
  height: "500px",
  marginLeft: "10%",
  marginRight: "10%",
  borderRadius: 40,
  marginTop: 100
}

const textStyle = {
  color: "black",

}

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
                  >
          <img src={item.src} alt={item.altText} style={imgSize}/>
          <CarouselCaption captionHeader={item.caption} captionText={""} style={textStyle}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}  />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} style={textStyle}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} style={textStyle}/>
      </Carousel>
    );
  }
}


export default Caroussel;