import {isNil} from 'lodash';

export const isNotNil = (value: any): boolean => !isNil(value);

export const isTrue = (value: any): boolean => value === true;
export const isFalse = (value: any): boolean => value === false;
