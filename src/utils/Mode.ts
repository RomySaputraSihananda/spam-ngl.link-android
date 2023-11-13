class Mode {
  private mode: string[] = [
    '',
    'confessions',
    '3words',
    'wfriendship',
    'rizzme',
    'tbh',
    'shipme',
    'yourcrush',
    'cancelled',
    'dealbreaker',
  ];

  public randomMode = (): string => {
    return this.mode[Math.floor(Math.random() * this.mode.length)];
  };
}

export default new Mode().randomMode;
