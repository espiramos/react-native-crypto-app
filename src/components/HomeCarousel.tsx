import { View, Dimensions } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState } from 'react';
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

// CAROUSEL SLIDE COMPONENT
import CarouselSlide from './CarouselSlide';
import { carouselItemType } from './types';



const HomeCarousel = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);
  const [currentItem, setCurrentItem] = useState(0);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const carouselItems: Array<carouselItemType> = [
    {
      heading: "P2P",
      subHeading: "Coming soon",
      img: 'carousel-bg-1'
    },
    {
      heading: "Your Personal Secured Platform",
      img: 'balance-b1'
    },
    {
      heading: "Crypto Card",
      subHeading: "Coming soon",
      img: 'carousel-bg-1'
    },
  ];

  const renderCarouselItems = (item: carouselItemType, index: number) => {
    const backgroundImage = BackgroundImageService.GetImage(index);
    return <CarouselSlide item={item} backgroundImage={backgroundImage} />;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginBottom: 28 }}>
        <Carousel
          loop={false}
          width={width - 40}
          height={height * 0.15}
          autoPlay={false}
          ref={ref}
          data={carouselItems}
          scrollAnimationDuration={300}
          snapEnabled={true}
          pagingEnabled={true}
          mode={'parallax'}
          modeConfig={{
            parallaxScrollingScale: 1.0,
            parallaxAdjacentItemScale: 1.0,
            parallaxScrollingOffset: -18
          }}
          style={{ backgroundColor: 'transparent' }}
          onProgressChange={(_, absoluteProgress) => {
            setCurrentItem(absoluteProgress);
            return (progressValue.value = absoluteProgress);
          }
          }
          renderItem={({ item, index }) => renderCarouselItems(item, index)}
        />

        {!!progressValue && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              alignSelf: 'center',
            }}
          >
            {carouselItems.map((item, index) => {
              return (
                <PaginationItem
                  animValue={progressValue}
                  currentItem={currentItem}
                  index={index}
                  key={index}
                  length={carouselItems.length}
                />
              );
            })}
          </View>
        )}

      </View>
    </GestureHandlerRootView>
  );
};


// PAGINATION DOT
const PaginationItem: React.FC<{
  index: number;
  currentItem: number;
  length: number;
  animValue: Animated.SharedValue<number>;
}> = (props) => {
  const { animValue, index, length, currentItem } = props;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-30, 0, 30];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-30, 0, 30];
    }

    return {
      transform: [
        {
          // translateX: interpolate(
          //   animValue?.value,
          //   inputRange,
          //   outputRange,
          //   Extrapolate.CLAMP
          // ),
          translateX: 100
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: currentItem === index ? 30 : 10,
        height: 10,
        borderRadius: 50,
        overflow: 'hidden',
        marginHorizontal: 3,
        marginTop: 18
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor: 'white',
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

// IMAGE INTERFACE
interface Image {
  index: number;
  img: any;
}
// RETURN IMAGE PATH SERVICE
class BackgroundImageService {
  private static images: Array<Image> = [
    {
      index: 0,
      img: require('../../assets/images/carousel-bg-1.png')
    },
    {
      index: 1,
      img: require('../../assets/images/carousel-bg-2.png')
    },
    {
      index: 2,
      img: require('../../assets/images/carousel-bg-3.png')
    },
  ];
  static GetImage = (index: number) => {
    const found = BackgroundImageService.images.find(e => e.index === index);
    return found ? found.img : null;
  };
}

export default HomeCarousel;

