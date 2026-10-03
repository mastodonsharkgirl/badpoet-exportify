import test from 'node:test';
import assert from 'node:assert/strict';
import { csvCell, csvDocument } from '../src/badpoetCsv.ts';
test('missing metadata is blank, zero and false remain values',()=>{
  assert.equal(csvCell(null),'""'); assert.equal(csvCell(undefined),'""');
  assert.equal(csvCell(0),'"0"');assert.equal(csvCell(false),'"false"');
});
test('quotes, newlines and multilingual names are preserved',()=>{
  assert.equal(csvCell('नाम, "गीत"\nnext'),'"नाम, ""गीत""\nnext"');
});
test('spreadsheet formula-like text is inert, negative numbers remain numeric',()=>{
  for(const text of ['=2+2','+SUM(A1)','-1+2','@name','\t=2','  =2'])assert.ok(csvCell(text).startsWith('"\''));
  assert.equal(csvCell(-12.5),'"-12.5"');
});
test('document has UTF-8 BOM and preserves release precision and artwork fields',()=>{
  const csv=csvDocument(['Album Release Date','Album Image URL'],[['2020','https://i.scdn.co/image/test']]);
  assert.ok(csv.startsWith('\ufeff'));assert.ok(csv.includes('"2020"'));assert.ok(csv.includes('https://i.scdn.co/image/test'));
});
