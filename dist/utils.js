
(function (myNameSpace) {
    'use strict';

    window[myNameSpace] = {

        /**
         *  get unique id
         */
        getUniqueId: function(prefix) {
            let s4 = function() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            if ( !prefix ) {
                return s4() + s4() + s4() + s4();
            }
            return prefix + s4() + s4() + s4() + s4();
        },

        /**
         *  格式化 Date() 物件成為 yyyy-mm-dd 格式
         *
         *  @param Date()
         *  @return string
         */
        getDate: function( date )
        {
            let yyyy = date.getFullYear().toString();
            let mm   = (date.getMonth()+1).toString();
            let dd   = date.getDate().toString();
            return   yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
        },

        /**
         *  陣列 get 工具
         *  在 key-value 陣列中, 找到相對應的 第一組 key, value
         *  傳回陣列索引值
         *
         *  @dependency this.each
         *  @return null or number
         */
        indexOf( array, key, val )
        {
            var result = null;
            this.each(array, function(index, item) {
                if (item[key]===val) {
                    result = index;
                    return false;
                }
            });
            return result;
        },

        /**
         *  陣列 set 工具
         *  在 key-value 陣列中, 找到相對應的 key
         *  將 value 寫入 (多筆)
         *
         *  @dependency this.each
         *  @return int 影響筆數
         */
        writeIndexOf( array, key, val )
        {
            let affect = 0;
            this.each(array, function(index, item) {
                if (item[key]) {
                    item[key] = val;
                    affect++;
                }
            });
            return affect;
        },

        /**
         *  each
         *      - 可以代入 object & array
         *      - 在 callback 中使用 "return false" 將離開整個迴圈
         *
         */
        each: function( obj, callback )
        {
            let isArray = false;
            if ( Object.prototype.toString.call( obj ) === '[object Array]' ) {
                isArray = true;
            }
            else if ( Object.prototype.toString.call( obj ) !== '[object Object]' ) {
                return;
            }

            let value,
                i = 0,
                length = obj.length;

            if ( isArray ) {
                for ( ; i < length; i++ ) {
                    value = callback.call( obj[ i ], i, obj[ i ] );
                    if ( value === false ) {
                        break;
                    }
                }
            } else {
                for ( i in obj ) {
                    value = callback.call( obj[ i ], i, obj[ i ] );
                    if ( value === false ) {
                        break;
                    }
                }
            }
            return obj;
        },

    };

})('utils');
