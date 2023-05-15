import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://media.product.which.co.uk/prod/images/1500_750/gm-fa7c88aa-2054-4b34-942f-57780f359ae0-carehomealternativesmain.jpeg',
    altText: 'Slide 1',
    caption: 'We look after them',
  },
  {
    src: 'https://img.freepik.com/premium-photo/seniors-doing-exercises_107420-36444.jpg?w=1800',
    altText: 'Slide 2',
    caption: 'Health is our priority',
  },
  {
    src: 'https://lottie.org/_next/image/?url=https%3A%2F%2Flottie-backend-prod-images.s3.eu-west-2.amazonaws.com%2FOutstanding_Care_Home_5e2594a36c.jpg&w=3840&q=75',
    altText: 'Slide 3',
    caption: 'Delivering always outstanding'
  }
];

const imgSize = {
  width: "80%",
  height: "620px",
  marginLeft: "10%",
  marginRight: "10%"
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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Caroussel;