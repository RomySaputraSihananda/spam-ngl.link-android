class Message {
  private messages: string[] = [
    'What is your last name?',
    'What is madin name of your mom?',
    'What is your first pet?',
    'Where was your last High School?',
    'Where was the birth place of your mom?',
    'How many siblings do you have?',
    'What is your height?',
    'What is your favorite food?',
    'What is your job?',
    'What is your home directory?',
    'When was the last day to login?',
    'What is your boss name?',
    'What is your clearance?',
    'What is your office number?',
    'What is your car model?',
    'Time Of the Day?',
    'Current Season?',
    'What was yesterday weather like?',
    'What is the month of last swtorm?',
    'When is the winter coming?',
    'Who is the president of the GMU?',
    'What is your last name?',
    'What is madin name of your mom?',
    'What is your first pet?',
    'Where was your last High School?',
    'Where was the birth place of your mom?',
    'How many siblings do you have?',
    'What is your height?',
    'What is your favorite food?',
    'What is your job?',
    'What is your home directory?',
    'When was the last day to login?',
    'What is your boss name?',
    'What is your clearance?',
    'What is your office number?',
    'What is your car model?',
    'Time Of the Day?',
    'Current Season?',
    'What was yesterday weather like?',
    'What is the month of last swtorm?',
    'When is the winter coming?',
  ];

  public randomMessage = (): string => {
    return this.messages[Math.floor(Math.random() * this.messages.length)];
  };
}

export default new Message().randomMessage;
