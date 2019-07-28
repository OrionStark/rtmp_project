const node_media_server = require('node-media-server')
const server_config = require('./configs/video_server_config').rtmp_server

const media_server = node_media_server(server_config)

media_server.on('prePublish', async ( id, streamPath, args ) => {
    const stream_key = streamPath.split('/')[streamPath.split('/') - 1]

    /**
     * We could scale it to the authenticate streaming vide by using stream key as the access key.
     */

    console.log('[NodeEvent on prePublish]', `id=${id} streamPath=${streamPath} args=${JSON.stringify(args)}`)
})

media_server.run()
