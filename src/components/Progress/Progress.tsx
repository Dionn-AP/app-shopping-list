import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, LinearProgress } from '@rneui/themed';
import theme from '../../styles/theme';

interface PropsProgress {
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const Progress = ({ progress, setProgress }: PropsProgress) => {


    useEffect(() => {
        const startTime = Date.now();
        const duration = 3000; // duração de 3 segundos
    
        const updateProgress = () => {
          const elapsed = Date.now() - startTime;
          const newProgress = Math.max(0, 1 - elapsed / duration);
          setProgress(newProgress);
    
          if (elapsed < duration) {
            requestAnimationFrame(updateProgress);
          }
        };
    
        requestAnimationFrame(updateProgress);
      }, []);

    return (
        <>
            <LinearProgress
                style={[styles.progressBar, { position: "absolute", bottom: 0 }]}
                value={progress}
                variant="determinate"
                color={theme.colors.background}
                trackColor={theme.colors.accent}
                animation={{
                    duration: 30,
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    progressBar: {
      width: '100%',
      height: 8,
    },
  });

export default Progress;