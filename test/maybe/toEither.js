import test from 'ava';
import { Just, Nothing } from '../../src/Maybe';

test('returns Either right side on the Just instance', t => {
  const value = 10;
  const just = Just(value);

  t.true(just.toEither().isRight);
  t.is(just.toEither('LEFT').getRightOr('DEFAULT'), value);
});

test('returns Either left side on the Nothing instance', t => {
  const nothing = Nothing();
  const leftValue = 'nothing';

  t.true(nothing.toEither().isLeft);
  t.is(nothing.toEither(leftValue).getLeftOr(), leftValue);
});
