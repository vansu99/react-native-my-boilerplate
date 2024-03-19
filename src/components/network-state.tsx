import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from '../redux/store';
import AlertHelper from '../utils/alert';
import { setNetworkState } from '../redux/slices/appSlice';

export default function NetworkState() {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = NetInfo.addEventListener(state => {
      dispatch(setNetworkState(state.isConnected));

      if (!state.isConnected) {
        AlertHelper.error('Network error', 'ERROR!');
      }
    });

    return () => {
      subscribe();
    };
  }, []);

  return null;
}
