import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

type MyCustomButtonProps = {
  label: string;
  onPress: () => void;
};

function MyCustomButton({ label, onPress }: MyCustomButtonProps) {
  return (
    <TouchableOpacity className="bg-red-500" onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

export { MyCustomButton };
export type { MyCustomButtonProps };
