import randomMessage from './Message';
import randomMode from './Mode';

class Spammer {
  public attack = async (username: string) => {
    const mode: string = randomMode();
    const message: string = randomMessage();
    try {
      const req = await fetch('https://ngl.link/api/submit', {
        method: 'POST',
        body: `username=${username}&question=${message}&deviceId=random...&gameSlug=${mode}&referrer=`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return true;
    } catch (err) {
      return false;
    }
  };
}

export default new Spammer().attack;
