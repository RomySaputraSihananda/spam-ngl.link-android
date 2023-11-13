import randomMessage from './Message';

class Spammer {
  private spam = async (username: string) => {
    let i: number = 1;
    const message: string = '';
    const mode: string = '';
    try {
      const req = await fetch('https://ngl.link/api/submit', {
        method: 'POST',
        body: `username=${username}&question=${message}&deviceId=random...&gameSlug=${mode}&referrer=`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return 1;
    } catch (err) {
      return 0;
    }
  };
}
