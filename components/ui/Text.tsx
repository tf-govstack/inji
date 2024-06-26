import React from 'react';
import { StyleProp, TextStyle, Text as RNText } from 'react-native';
import { Theme, Spacing } from './styleUtils';

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const weight = props.weight || 'regular';

  const textStyles: StyleProp<TextStyle> = [
    Theme.TextStyles.base,
    Theme.TextStyles[weight],
    props.color ? { color: props.color } : null,
    props.align ? { textAlign: props.align } : { textAlign: 'left' },
    props.margin ? Theme.spacing('margin', props.margin) : null,
    props.size ? Theme.TextStyles[props.size] : null,
    props.style ? props.style : null,
  ];

  return (
    <RNText style={textStyles} numberOfLines={props.numLines}>
      {props.children}
    </RNText>
  );
};

interface TextProps {
  children: React.ReactNode;
  color?: string;
  weight?: 'regular' | 'semibold' | 'bold';
  align?: TextStyle['textAlign'];
  margin?: Spacing;
  size?: 'small' | 'smaller' | 'regular';
  lineHeight?: number;
  numLines?: number;
  style?: StyleProp<TextStyle>;
}
