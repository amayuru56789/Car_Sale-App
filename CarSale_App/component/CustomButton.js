// import {Text, TouchableOpacity} from 'react-native';
// import React from 'react';

// export default function CustomButton({label, onPress}) {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={{
//         backgroundColor: '#AD40AF',
//         padding: 20,
//         borderRadius: 10,
//         marginBottom: 30,
//       }}>
//       <Text
//         style={{
//           textAlign: 'center',
//           fontWeight: '700',
//           fontSize: 16,
//           color: '#fff',
//         }}>
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// }

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton(label) {
  return (
    <TouchableOpacity
    onPress={(saveData) => {}}
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        Register
      </Text>
    </TouchableOpacity>
  )
}
