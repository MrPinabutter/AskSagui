import { format } from "date-fns";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { secondsToTimeString, timeStringToSeconds } from "@/utils/time.utils";

type QueueData = {
  current: {
    count: number;
    flow_rate: string;
  },
  lunch?: string;
  temp: number;
  weather: string;
  duration: number;
}

const useQueueData = () => {
  const [queue, setQueue] = useState<QueueData>();

  useEffect(() => {
    const date = new Date();
    return onValue(ref(db, `/video6/${format(date, 'yyyy-MM-dd')}`), querySnapShot => {
      let data = querySnapShot.val() || {};

      const duration = data?.current?.flow_rate ? (timeStringToSeconds(data?.current?.flow_rate) * data?.current?.count / 60) : 0
      data.duration = secondsToTimeString(duration);
      setQueue(data);
    });
  }, [])

  return { queue };
}

export default useQueueData;