// Copyright (c) 2017-2020 Uber Technologies Inc.
//
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import getEscapedForwardSlash from './get-escaped-forward-slash';

describe('getEscapedForwardSlash', () => {
  it('should escape one forward slash and convert to %2F.', () => {
    const input = '/';
    const output = getEscapedForwardSlash(input);

    expect(output).toEqual('%2F');
  });

  it('should escape many forward slashes and convert each to %2F.', () => {
    const input = '///';
    const output = getEscapedForwardSlash(input);

    expect(output).toEqual('%2F%2F%2F');
  });

  it('should convert forward slashes in a string containing other characters with forward slashes.', () => {
    const input = 'hello/world';
    const output = getEscapedForwardSlash(input);

    expect(output).toEqual('hello%2Fworld');
  });

  it('should not do anything if string does not contain forward slash.', () => {
    const input = 'helloworld';
    const output = getEscapedForwardSlash(input);

    expect(output).toEqual('helloworld');
  });
});
