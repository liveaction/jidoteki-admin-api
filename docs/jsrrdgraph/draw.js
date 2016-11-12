function draw(gfxname, graph, duration)
{
  var graph, cmdline, gfx, fetch, rrdcmdline;

  cmdline = graphdata[graph].concat([duration]).join("\n");

  try {
    gfx = new RrdGfxCanvas(gfxname);
    fetch = new RrdDataFile();
    rrdcmdline = new RrdCmdLine(gfx, fetch, cmdline);
    rrdcmdline.graph.graph_paint();
  } catch (e) {
    console.log("Unable to load graph: " + graph);
  }
}

var graphdata = {
  load: [
    '-w 350',
    '-h 120',
    '-E',
    '-c',
    'BACK#F2F2F2',
    '-c',
    'SHADEA#F2F2F2',
    '-c',
    'SHADEB#F2F2F2',
    '-c',
    'FONT#555555',
    '-c',
    'ARROW#555555',
    '--font',
    'DEFAULT:13:Courier',
    'DEF:s_avg=/docs/rrd/localhost/load/load.rrd:shortterm:AVERAGE',
    'DEF:s_min=/docs/rrd/localhost/load/load.rrd:shortterm:MIN',
    'DEF:s_max=/docs/rrd/localhost/load/load.rrd:shortterm:MAX',
    'DEF:m_avg=/docs/rrd/localhost/load/load.rrd:midterm:AVERAGE',
    'DEF:l_avg=/docs/rrd/localhost/load/load.rrd:longterm:AVERAGE',
    'AREA:s_max#B7EFB7',
    'AREA:s_min#FFFFFF',
    '"LINE1:s_avg#00E000: 1m average"',
    '"LINE1:m_avg#0000FF: 5m average"',
    '"LINE1:l_avg#FF0000:15m average"' ],
  memory: [
    '-w 350',
    '-h 120',
    '-E' ,
    '-b 1024' ,
    '-c',
    'BACK#F2F2F2',
    '-c',
    'SHADEA#F2F2F2',
    '-c',
    'SHADEB#F2F2F2',
    '-c',
    'FONT#555555',
    '-c',
    'ARROW#555555',
    '--font',
    'DEFAULT:13:Courier',
    'DEF:free_avg=/docs/rrd/localhost/memory/memory-free.rrd:value:AVERAGE' ,
    'CDEF:free_nnl=free_avg,UN,0,free_avg,IF' ,
    'DEF:cached_avg=/docs/rrd/localhost/memory/memory-cached.rrd:value:AVERAGE' ,
    'CDEF:cached_nnl=cached_avg,UN,0,cached_avg,IF' ,
    'DEF:buffered_avg=/docs/rrd/localhost/memory/memory-buffered.rrd:value:AVERAGE' ,
    'CDEF:buffered_nnl=buffered_avg,UN,0,buffered_avg,IF' ,
    'DEF:used_avg=/docs/rrd/localhost/memory/memory-used.rrd:value:AVERAGE' ,
    'CDEF:used_nnl=used_avg,UN,0,used_avg,IF' ,
    'CDEF:used_stk=used_nnl' ,
    'CDEF:buffered_stk=buffered_nnl,used_stk,+' ,
    'CDEF:cached_stk=cached_nnl,buffered_stk,+' ,
    'CDEF:free_stk=free_nnl,cached_stk,+' ,
    'AREA:free_stk#bff7bf' ,
    '"LINE1:free_stk#00e000:free    "' ,
    'AREA:cached_stk#bfbfff' ,
    '"LINE1:cached_stk#0000ff:cached  "' ,
    'AREA:buffered_stk#ffebbf' ,
    '"LINE1:buffered_stk#ffb000:buffered"' ,
    'AREA:used_stk#ffbfbf' ,
    '"LINE1:used_stk#ff0000:used    "' ],
  if_octets: [
    '-w 350',
    '-h 140',
    '-E' ,
    '--units=si' ,
    '-c',
    'BACK#F2F2F2',
    '-c',
    'SHADEA#F2F2F2',
    '-c',
    'SHADEB#F2F2F2',
    '-c',
    'FONT#555555',
    '-c',
    'ARROW#555555',
    '--font',
    'DEFAULT:13:Courier',
    'DEF:out_avg_raw=/docs/rrd/localhost/interface-eth0/if_octets.rrd:tx:AVERAGE' ,
    'DEF:inc_avg_raw=/docs/rrd/localhost/interface-eth0/if_octets.rrd:rx:AVERAGE' ,
    'CDEF:out_avg=out_avg_raw,8,*' ,
    'CDEF:inc_avg=inc_avg_raw,8,*' ,
    'CDEF:overlap=out_avg,inc_avg,GT,inc_avg,out_avg,IF' ,
    'AREA:out_avg#B7EFB7' ,
    'AREA:inc_avg#B7B7F7' ,
    'AREA:overlap#89B3C9' ,
    '"LINE1:out_avg#00E000:Outgoing"' ,
    '"LINE1:inc_avg#0000FF:Incoming"' ],
  disk: [
    '-w 350',
    '-h 125',
    '-E',
    '-l 0',
    '-c',
    'BACK#F2F2F2',
    '-c',
    'SHADEA#F2F2F2',
    '-c',
    'SHADEB#F2F2F2',
    '-c',
    'FONT#555555',
    '-c',
    'ARROW#555555',
    '--font',
    'DEFAULT:13:Courier',
    'DEF:free_a=/docs/rrd/localhost/df-data/df_complex-free.rrd:value:AVERAGE',
    'DEF:free_b=/docs/rrd/localhost/df-mnt-sda1/df_complex-free.rrd:value:AVERAGE',
    'DEF:used_a=/docs/rrd/localhost/df-data/df_complex-used.rrd:value:AVERAGE',
    'DEF:used_b=/docs/rrd/localhost/df-mnt-sda1/df_complex-used.rrd:value:AVERAGE',
    'CDEF:total_a=free_a,used_a,+',
    'CDEF:total_b=free_b,used_b,+',
    'CDEF:free_pct_a=100,free_a,*,total_a,/',
    'CDEF:free_pct_b=100,free_b,*,total_b,/',
    'CDEF:used_pct_a=100,used_a,*,total_a,/',
    'CDEF:used_pct_b=100,used_b,*,total_b,/',
    'CDEF:free_acc_a=free_pct_a,used_pct_a,+',
    'CDEF:free_acc_b=free_pct_b,used_pct_b,+',
    'CDEF:used_acc_a=used_pct_a',
    'CDEF:used_acc_b=used_pct_b',
    'AREA:free_acc_a#B7EFB7',
    '"LINE1:used_acc_a#00E000:Data (LVM /data)"',
    '"GPRINT:free_a:AVERAGE:%5.1lf%sB free"',
    '"GPRINT:used_a:AVERAGE:%5.1lf%sB used"',
    'AREA:free_acc_b#B7EFB7',
    '"LINE1:used_acc_b#0000ff:Boot (/mnt/sda1)"',
    '"GPRINT:free_b:AVERAGE:%5.1lf%sB free"',
    '"GPRINT:used_b:AVERAGE:%5.1lf%sB used"'
    ]
}   
