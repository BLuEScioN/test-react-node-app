import * as React from 'react';

interface IPhoneNumberBoxProps {}
interface IPhoneNumberBoxState {
  input: string;
}

export class PhoneSearchBox extends React.Component<
  IPhoneNumberBoxProps,
  IPhoneNumberBoxState
> {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  public render() {
    return (
      <input
        value={this.state.input}
        placeholder={'(555) 555-5555'}
        // tslint:disable-next-line: jsx-no-lambda
        onChange={e => this.onInputChange(e)}
      />
    );
  }

  private onInputChange(e) {
    let input = e.target.value;

    // clean input
    input = input.replace(/\D/g, '');

    // check number of digits is not greater than 10
    if (input.length > 10) {
      return;
    }

    // validate input
    // if (!this.isDigit(input)) {
    //   return;
    // }

    // add parens, spaces, and dashes
    input = this.formatPhoneNumber(input);

    this.setState({ input });
  }

  // private isDigit(input: string) {
  //   if (input.match(/\d+/)) {
  //     // Only digits are allowed in the input
  //     return true;
  //   } else if (input.match(/^$/)) {
  //     // Empty strings must to allow the user to delete all their input
  //     return true;
  //   }
  //   return false;
  // }

  private formatPhoneNumber(input: string): string {
    const originalInput = input;
    let formattedInput = input;
    const areaCode = originalInput.slice(0, 3);
    const number = originalInput.slice(3);

    if (originalInput.length > 0 && originalInput.length < 4) {
      formattedInput = '(' + areaCode;
    } else if (originalInput.length > 3 && originalInput.length <= 6) {
      formattedInput = '(' + areaCode + ')' + ' ' + number;
    } else if (originalInput.length > 6) {
      formattedInput =
        '(' + areaCode + ')' + ' ' + number.slice(0, 3) + '-' + number.slice(3);
    }
    return formattedInput;
  }
}
